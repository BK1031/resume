import Link from 'next/link';
import fs from 'fs';

export default function ResumesPage() {

  const fileNames = fs.readdirSync('./public');

  const fileStats = fileNames
    .filter((fileName) => fileName.endsWith('.pdf'))
    .map((fileName) => {
      const stats = fs.statSync(`./public/${fileName}`);
      return {
        fileName,
        fileSize: stats.size,
        dateModified: stats.mtime.toISOString().split('T')[0],
      };
    }).sort((a, b) => {
      if (a.fileName === 'main.pdf') {
        return -1;
      } else if (b.fileName === 'main.pdf') {
        return 1;
      } else {
        return a.fileName.localeCompare(b.fileName);
      }
    });

  return (
    <main className="p-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-start">
          <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
            Resumes
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            {`Here's a collection of all my resumes.`}
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-4xl">
        {fileStats.map((file) => (
          <Link key={file.fileName} href={file.fileName}>
            <div className="mt-2 flex items-center justify-between gap-x-6 p-2 rounded-lg hover:bg-zinc-900 w-full">
              <div className="flex items-center justify-center">
                  <div className="w-20 h-20 mr-4 bg-sky-950 rounded-lg"></div>
                  <div>
                    <p className="text-lg font-semibold text-white">{file.fileName.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()).replace('.Pdf', '')}</p>
                    <p className="text-sm text-gray-500">File Size: {file.fileSize >= 1024 ? (file.fileSize / 1024).toFixed(2) + ' MB' : file.fileSize + ' KB'}</p>
                    <p className="text-sm text-gray-500">Date Created: {file.dateModified}</p>
                  </div>
                </div>
                <div className="text-sm font-semibold leading-6 mr-2 text-sky-500">
                  Download
                </div>
            </div>
          </Link>
          ))}
      </div>
    </main>
  )
}
