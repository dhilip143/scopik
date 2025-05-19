import React from "react";
import certificate from "/src/assets/certificateImage.jpg";
import linkdin from "/src/assets/linkdin.png";

const CertificatePage = () => {
  const credentialId = "2ml5fw91Q37Mx9It66";
  const credentialUrl = `https://www.guvi.in/share-certificate/${credentialId}`;

  const certificateUrl = "https://ibb.co/QvH1KBRZ.jpg";
  const linkedInShareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    certificateUrl
  )}`;

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className=" mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <h1 className="text-5xl font-semibold mb-4">
            Certificate of Completion
          </h1>
          <p className="mb-6 text-xl">
            This Certificate verifies that <strong>sathiya narayanan R</strong>,
            completed the <strong>Full Stack with Python Programming</strong>{" "}
            successfully.
          </p>

          <div className="mb-4">
            <label className="font-semibold">Credential ID</label>
            <div className="flex gap-2 mt-1">
              <input
                type="text"
                readOnly
                value={credentialId}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <button
                onClick={() => navigator.clipboard.writeText(credentialId)}
                className="bg-green-500 text-white px-4 py-2 rounded-md"
              >
                Copy ID
              </button>
            </div>
          </div>

          <div className="mb-6">
            <label className="font-semibold">Credential URL</label>
            <div className="flex gap-2 mt-1">
              <input
                type="text"
                readOnly
                value={credentialUrl}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <button
                onClick={() => navigator.clipboard.writeText(credentialUrl)}
                className="bg-green-500 text-white px-4 py-2 rounded-md"
              >
                Copy URL
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              By using this above link you can update your certificate in
              LinkedIn.{" "}
              <a href="#" className="text-purple-600">
                How?
              </a>
            </p>
          </div>

          <div className="flex gap-4 items-center">
            <p className="font-semibold">Share this Certificate</p>
            <div className="flex gap-3">
              <a
                href={linkedInShareLink}
                target="_blank"
                rel="noopener noreferrer"
                className=" text-black px-4 py-2 rounded hover:bg-blue-800"
              >
                {/* Share on LinkedIn */}
                <img src={linkdin} alt="" className="size-9" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center justify-center">
          <img
            src={certificate}
            alt="Certificate Preview"
            className="w-full h-auto border border-gray-300 rounded-md"
          />
          <a
            href="/path-to-your-certificate-image.jpg"
            download
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Download Certificate
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;
