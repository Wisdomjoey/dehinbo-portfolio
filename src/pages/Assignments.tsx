import React, { useState, useEffect } from "react";
import { Upload, Download, File as FileIcon, Trash2, Plus } from "lucide-react";

interface Assignment {
  id: string;
  name: string;
  date: string;
  size: string;
  file: File;
}

const Assignments = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    handleFiles(files);
  };

  const handleFiles = (files: File[], names?: string[]) => {
    const newAssignments = files.map((file, ind) => ({
      id: Math.random().toString(36).substr(2, 9),
      name: (names ?? [])[ind] ?? file.name,
      date: new Date().toLocaleDateString(),
      size: formatFileSize(file.size),
      file: file,
    }));

    setAssignments((prev) => [...prev, ...newAssignments]);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const removeAssignment = (id: string) => {
    setAssignments((prev) => prev.filter((assignment) => assignment.id !== id));
  };

  const downloadAssignment = (assignment: Assignment) => {
    const url = URL.createObjectURL(assignment.file);
    const a = document.createElement("a");
    a.href = url;
    a.download = assignment.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    const filePath =
      "https://envie-portfolio.vercel.app/Dehinbo Boluwatife Adebowale - ASSIGNMENT 1.docx"; // Replace with the actual file path

    const fetchData = async () => {
      try {
        const res = await fetch(filePath);

        if (!res.ok) return console.log("Couldnt fetch file");

        const blob = await res.blob();
        const file = new File(
          [blob],
          "Dehinbo Boluwatife Adebowale - ASSIGNMENT 1.docx",
          { type: blob.type }
        );

        handleFiles([file]);
      } catch (error) {
        console.error(error);
        console.log("Something went wrong");
      }
    };

    fetchData();
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12 slide-up">
        <div className="hexagon w-24 h-24 bg-violet-600 mx-auto mb-8 rotate-slow">
          <div className="w-full h-full flex items-center justify-center">
            <Upload className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-6">
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">
            Assignment Manager
          </span>
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-lg">
          Upload and manage your assignments in one place
        </p>
      </div>

      <div
        className={`glass rounded-2xl p-12 mb-8 text-center slide-up ${
          dragActive && "ring-2 ring-violet-500"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          multiple
          onChange={handleFileInput}
          className="hidden"
          id="file-upload"
        />
        <div className="max-w-xl mx-auto">
          <Upload className="w-16 h-16 mx-auto mb-4 text-violet-600 dark:text-violet-400" />
          <h3 className="text-xl font-semibold mb-2 dark:text-white">
            Upload Assignments
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Drag and drop your files here, or click to browse
          </p>
          <label
            htmlFor="file-upload"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:opacity-90 transition-opacity cursor-pointer"
          >
            <Plus className="mr-2 h-5 w-5" />
            Select Files
          </label>
        </div>
      </div>

      {assignments.length > 0 && (
        <div className="glass rounded-2xl overflow-hidden slide-up">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <h2 className="text-xl font-semibold dark:text-white">
              Uploaded Assignments
            </h2>
          </div>

          <div className="divide-y divide-slate-200 dark:divide-slate-700">
            {assignments.map((assignment) => (
              <div
                key={assignment.id}
                className="p-6 flex items-center justify-between hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 glass rounded-xl">
                    <FileIcon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <div>
                    <h3 className="font-medium dark:text-white">
                      {assignment.name}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Uploaded on {assignment.date} • {assignment.size}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => downloadAssignment(assignment)}
                    className="p-2 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-900/50 group"
                    title="Download"
                  >
                    <Download className="w-5 h-5 text-slate-400 group-hover:text-violet-500 dark:text-slate-500 dark:group-hover:text-violet-400" />
                  </button>
                  <button
                    onClick={() => removeAssignment(assignment.id)}
                    className="p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/50 group"
                    title="Delete"
                  >
                    <Trash2 className="w-5 h-5 text-slate-400 group-hover:text-red-500 dark:text-slate-500 dark:group-hover:text-red-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Assignments;
