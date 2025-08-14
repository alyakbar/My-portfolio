"use client";

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { Skeleton } from './ui/skeleton';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

interface CertificatePreviewProps {
  file: string;
}

export default function CertificatePreview({ file }: CertificatePreviewProps) {
  const [numPages, setNumPages] = useState<number | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="h-full w-full flex items-center justify-center bg-gray-200">
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<Skeleton className="h-full w-full" />}
        error={<div className="p-4 text-sm text-red-500">Failed to load PDF.</div>}
        className="h-full w-full flex items-center justify-center"
      >
        <Page
          pageNumber={1}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          className="[&>canvas]:!w-full [&>canvas]:!h-auto"
          loading={<Skeleton className="h-full w-full" />}
        />
      </Document>
    </div>
  );
}
