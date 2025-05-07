import React from 'react';

interface PrivacyPolicyModalProps {
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
    <div className="relative bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8 text-left overflow-y-auto max-h-[80vh]">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
        aria-label="Close"
      >
        &times;
      </button>
      <main>
        <h1 className="text-3xl font-bold mb-4 text-center">PRIVACY POLICY</h1>
        <p>
          Saathi is a commercial app by Saathi WorldAPP Private Limited (formerly GreyBlue Ventures Private Limited) ("Saathi"). This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information for anyone using the app and website of Saathi ("Saathi Platform"). By using Saathi Platform, you consent to the terms of our privacy policy ("Privacy Policy") in addition to our Terms of Service. We encourage you to read this Privacy Policy regarding the collection, use, and disclosure of your information from time to time to keep yourself updated with the changes & updates that we make to this Privacy Policy.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Personal Identification Information</h2>
        <p>
          If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Identification Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
        </p>
        <p>
          The personal information you provide on Saathi Platform when you fill out your profile is public, such as your name, location, gender, profile picture, education and professional info including where you are working. This is hereinafter called Public Profile. Your Public Profile will be published on Saathi Platform. Your Public Profile can:
        </p>
        <ul className="list-disc ml-8 mb-2">
          <li>Be associated with you on the internet.</li>
          <li>Show up when someone does a search on search engine.</li>
        </ul>
        <p>
          We also use your Public Profile, to access growth opportunities. We may collect Personal Identification Information of users including the information that is available on the internet, such as from Truecaller, Facebook, LinkedIn, Twitter and Google, or publicly available information that we acquire from service providers. We collect this information to identify users for better communication, processing and personalization of the Services provided by the third party service provider, who may have access to the data so collected.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Non-personal Identification Information</h2>
        <p>
          We may collect non-personal identification information about users whenever they interact with our site. Non-personal identification information may include the type of mobile phone and technical information about users, such as the operating system and the Internet service providers utilized including IP address and other similar information.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Usage and Technical Information</h2>
        <p>
          We collect the information about how you interact with our Service. This information may include your IP address, geographical location, browser type, referral source, length of visit, pages viewed and items clicked.
        </p>
      </main>
    </div>
  </div>
);

export default PrivacyPolicyModal; 