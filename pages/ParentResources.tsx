import React from 'react';
import PageShell from '../components/PageShell';
import { RESOURCE_FILES } from '../constants';
import { ResourceFile } from '../types';

const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);


const ResourceCard: React.FC<{ file: ResourceFile }> = ({ file }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div>
            <h3 className="text-xl font-bold text-battle-green">{file.name}</h3>
            <p className="text-gray-600 mt-2 mb-6">{file.description}</p>
        </div>
        <a 
            href={file.url}
            download
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center self-start bg-battle-green text-white font-semibold py-2 px-5 rounded-md hover:bg-green-700 transition-colors duration-300"
        >
            <DownloadIcon />
            Download
        </a>
    </div>
);

const ParentResources: React.FC = () => {
  return (
    <PageShell title="Parent Resources">
      <p className="mb-12 text-xl max-w-4xl text-gray-600">
        Welcome to the Parent Resource Hub. Here you can find and download important documents, forms, and calendars to stay informed and prepared for the school year.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {RESOURCE_FILES.map((file, index) => (
          <ResourceCard key={index} file={file} />
        ))}
      </div>
    </PageShell>
  );
};

export default ParentResources;