import React from 'react';

interface TermsModalProps {
  onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ onClose }) => (
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
        <h1 className="text-3xl font-bold mb-4 text-center">USER TERMS OF SERVICE</h1>
        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2">1. Usage of Saathi</h2>
          <span>
            The <b>"Saathi Platform”</b> (including any mobile based applications, website and web applications) is provided by Saathi WorldAPP Private Limited (formerly GreyBlue Ventures Private Limited) either directly or through its affiliates collectively referred to as (<b>"Saathi"</b>). Through the Saathi Platform any person with a verified account can view, access and participate in the services provided by Saathi.
          </span>
          <ol className="list-[lower-alpha] ml-6 mt-2 space-y-2">
            <li>
              A User accessing the Saathi Platform shall be bound by these Terms of Service, and all other rules, regulations and terms of use referred to herein or provided by Saathi in relation to any services provided via the Saathi Platform (<b>"Services"</b>).
            </li>
            <li>
              Saathi shall be entitled to modify these Terms of Service, rules, regulations and terms of use referred to herein or provided by Saathi in relation to any Saathi Services, at any time, by posting the same on the Saathi Platform. Use of the Saathi Platform and Services constitutes the User's acceptance of such modified Terms of Service, rules, regulations and terms of use referred to herein or provided by Saathi in relation to any Services, as may be amended from time to time. Saathi may, at its sole discretion, also notify the User of any change or modification in these Terms of Service, rules, regulations and terms of use referred to herein or provided by Saathi, by way of sending an email to the User's registered email address or posting notifications in the User accounts or through any other mode of communication. The User may then exercise the options provided in such an email or notification to indicate (non-)acceptance of the modified Terms of Service, rules, regulations and terms of use referred to herein or provided by Saathi on support@saathi.in. If such options are not exercised by the User within the time frame prescribed in the email or notification, the User will be deemed to have accepted the modified Terms of Service, rules, regulations and terms of use referred to herein or provided by Saathi.
            </li>
            <li>
              Certain Services being provided on Saathi Platform may be subject to additional rules and regulations set down in that respect. To the extent that these Terms of Service are inconsistent with the additional conditions set down, the additional conditions shall prevail.
            </li>
            <li>
              Saathi may, at its sole and absolute discretion:
              <ol className="list-[lower-roman] ml-6">
                <li>Restrict, suspend, or terminate any User's access to all or any part of the Saathi Platform or Services;</li>
                <li>Change, suspend, or discontinue all or any part of the Platform or Services;</li>
                <li>Reject, move, or remove any material that may be submitted by a User;</li>
                <li>Move or remove any content that is available on the Saathi Platform;</li>
                <li>Deactivate or delete a User's account and all related information and files on the account;</li>
                <li>Establish general practices and limits concerning use of Saathi Platform;</li>
                <li>Assign its rights and liabilities to all User accounts hereunder to any entity (post such assignment, intimation of such assignment shall be sent to all Users to their registered, mobile phone numbers and/or email ids, and/or by posting and/or on the Saathi platform and/or through such other modes of written communication as Saathi deems fit).</li>
              </ol>
            </li>
            <li>
              In the event any User breaches, or if Saathi reasonably believes that such User has breached these Terms of Service, or has illegally or improperly used the Saathi Platform or Services, Saathi may, at its sole and absolute discretion, and without any notice to the User, restrict, suspend or terminate such User's access to all or any part of the Saathi Platform, deactivate or delete the User's account and all related information on the account, delete any content posted by the User on Saathi and further, take technical and legal steps as it deemed necessary.
            </li>
            <li>
              If Saathi charges its Users a platform fee in advance in respect of any Saathi Services, Saathi shall, without delay, repay such platform fee in the event of suspension or removal of the User's account or Saathi Services on account of any negligence or deficiency on the part of Saathi, but not if such suspension or removal is effected due to:
              <ol className="list-[lower-alpha] ml-6">
                <li>any breach or inadequate performance by the User of any of these Terms of Service; or</li>
                <li>any circumstances beyond the reasonable control of Saathi.</li>
              </ol>
            </li>
            <li>
              By accepting these Terms of Service, Users are providing their consent to receiving all forms of communications including but not limited to announcements, administrative messages and advertisements from Saathi or any of its partners, licensors or associates.
            </li>
          </ol>
          <h2 className="text-xl font-semibold mt-6 mb-2">2. Participation</h2>
<p>
  When accessing and interacting with the Saathi Platform and Services a User will be able to view and take skilling courses and other Services offered by Saathi as well as apply for jobs posted by potential employers, interact with other Saathi Users etc. Jobs are posted by independent third parties not related to or affiliated with Saathi.
</p>
<p>
  In order to access and interact with the Saathi Platform and utilise the Services a User will be required to create a user ID (“True ID”) on the Saathi Platform. Further, the User shall pay the applicable fee for the True ID (“Platform Fees/ Service Fees”) in order to access the features and Services offered by Saathi on the Saathi Platform. The User acknowledges and agrees that Saathi shall have the right to modify the Platform and Service Fees, modify the paid features, add and/or remove content, add and/or remove premium content with additional fees, and any other Services offered, and create additional qualifications to access the Saathi Platform and the Services offered on the Saathi Platform at its sole discretion at anytime.
</p>
<p>
  To view and take a course, other Services and apply for a job a User may be required to provide information about their education, qualifications, past experience and skills or any other information required by Saathi. Saathi may use the information provided by the User, the results of the courses and/or tests taken by a User and any other information that may be relevant and available to Saathi to develop a rating for the User (“Saathi Rating”). The Saathi Rating shall be calculated on the basis of a multitude of factors, including but not limited to psychometric analyses, relevant qualifications, level of education and courses completed through the Saathi platform.
</p>
<p>
  While Saathi does not tolerate or allow for discrimination on the basis of gender, certain jobs that might be posted by potential employers might be gender specific and/or might be available only to persons of a certain gender. The User understands and acknowledges that such stipulations as to gender specifications for a certain job are not mandated by Saathi and that such stipulation is made by the job poster.
</p>
<p>
  The User agrees and acknowledges that upon creation of the True ID Saathi may conduct checks (including but not limited to checks for past experience, qualifications, criminal antecedents etc.) (such checks shall collectively be referred to as “Background Verification”) as deemed appropriate by Saathi. If the Background Verification of the User fails or is incomplete, Saathi reserves the right to update the True ID to reflect such incomplete or failure status of the Background Verification and further reserves the right to communicate such failure or incomplete status to third parties (including, and especially to employers, whether current or potential) who rely on or intend to rely on the True ID of the User. For avoidance of doubt, a user shall at all times be able to access the Saathi Platform avail other Services offered by Saathi at Saathi’s sole discretion irrespective of the status of their Background Verification.
</p>
<p>
  In the case of incomplete and/or failed Background Verification, Saathi shall, as it deems fit in its sole discretion, allow such number of further attempts to complete or conduct the Background Verification again. Upon successful completion of Background Verification, Saathi reserves the right to conduct re-verification upon such cadence as it deems fit in its sole discretion.
</p>
<p>
  By agreeing to these Terms of Service and accessing the Saathi Platform as well as applying for a job through the Saathi Platform, Users undertake that all information shared will, at all times, be accurate and not be misleading. The User understands and acknowledges that any incorrect information or misrepresentations made by the User will affect the reputation, credibility and efficacy of the Saathi Platform and Services offered by Saathi and that Saathi shall have the right to suspend the User’s account if it is found that the information shared by the User is false or misleading.
</p>
<p>
  The job applications by the Users on the Saathi Platform shall remain active only for such periods of time as Saathi deems fit in its sole discretion. The validity of a job application may vary depending on multiple factors such as the nature and type of job, individual requirements of potential employers, the number of applications received to a particular job posting etc. The validity of a job application shall be calculated from the first date on which such job application is made. Saathi may set terms for the validity of such job application from time to time.
</p>
<p>
  Users agree that they shall at all times be bound by and adhere to the Code of Conduct while accessing the Saathi Platform and while using the Services.
</p>
<p>
  Saathi may, from time to time and at its sole discretion, offer a program that allows Users to refer other potential users (“Saathi Referral Program”). Users participating in a relevant Saathi Referral Program, agree and acknowledge that they shall be bound by the terms of such Saathi Referral Program. The terms of a particular Referral Program shall be applicable once the User signs up on the Saathi Platform and creates a True ID and shall be eligible to participate in such Saathi Referral Program.
</p>
<p>
  All Platform/Service Fees charged by Saathi shall be refundable within such periods of time as communicated to Users from time-to-time. Any payments due and payable to a User in relation to a Saathi Referral Program shall be independent of any refunds of Platform/Service Fees and vice versa. In the event any person referred by a User to the Saathi platform claims a refund of the Platform/Service Fees paid by such referred person within the stipulated timeframe for claiming a refund and the User who referred such person has withdrawn the amount due and payable by Saathi for making the referral (each a “Referral Fee”) Saathi, in its sole discretion, reserves the right to net off any future Referral Fees owed to the particular User against future referrals made by such User.
</p>
<p>
  Once the refund request is approved, the refund amount will be processed and credited within 5 days to the original mode of payment. In case of any issues, Users can reach out to Saathi at support@saathi.in.
</p>
<p>
  As part of the Services, users may be able to access artificial intelligence based natural/large language models which can make suggestions in relation to queries that a User might have in relation to various topics such as job/growth opportunities, access to financing, financial planning etc. (“Saathi bhAI”) Users understand and acknowledge that Saathi bhAI being an artificial intelligence based natural/large language models might make mistakes in the responses that it generates. Users further understand and acknowledge that the responses generated by Saathi bhAI are not meant to be advice (whether legal, financial or otherwise) in any form or manner whatsoever. Saathi accepts no responsibility or liability whatsoever for any actions that a user might take pursuant to any actions taken based on the responses generated by Saathi bhAI.
</p>

        </div>
        {/* You can continue to add more sections here as needed, following the same pattern */}
      </main>
    </div>
  </div>
);

export default TermsModal; 