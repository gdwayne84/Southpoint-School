import React, { useState } from 'react';
import PageShell from '../components/PageShell';
import { FEE_SCHEDULES } from '../constants';

const ChecklistIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const Admissions: React.FC = () => {
    const [selectedLevelId, setSelectedLevelId] = useState(FEE_SCHEDULES[0].id);
    const selectedSchedule = FEE_SCHEDULES.find(s => s.id === selectedLevelId);

    return (
        <PageShell title="Admissions">
            <div className="max-w-4xl">
                <p className="mb-12 text-xl text-gray-600">
                    Follow these three simple steps to become part of the Southpoint community. We look forward to welcoming you.
                </p>
            </div>

            {/* Admission Process Section */}
            <div className="mb-16">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="flex flex-col p-6 bg-white rounded-lg shadow-md border-t-4 border-battle-green">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-battle-green text-white text-xl font-bold mb-4">1</div>
                        <h3 className="text-xl font-bold text-battle-green mb-2">Submit Application</h3>
                        <p className="text-gray-600">Complete the online application form and upload all required documents through our admissions portal. Ensure all information is accurate and complete to avoid delays.</p>
                    </div>
                    <div className="flex flex-col p-6 bg-white rounded-lg shadow-md border-t-4 border-battle-green">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-battle-green text-white text-xl font-bold mb-4">2</div>
                        <h3 className="text-xl font-bold text-battle-green mb-2">Assessment & Interview</h3>
                        <p className="text-gray-600">Applicants will be scheduled for an entrance examination to gauge their academic preparedness, followed by a friendly interview with our admissions officer.</p>
                    </div>
                    <div className="flex flex-col p-6 bg-white rounded-lg shadow-md border-t-4 border-battle-green">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-battle-green text-white text-xl font-bold mb-4">3</div>
                        <h3 className="text-xl font-bold text-battle-green mb-2">Enrollment</h3>
                        <p className="text-gray-600">Once accepted, you will receive an offer letter. Complete the enrollment process by settling the necessary fees and submitting final documents to secure your slot.</p>
                    </div>
                </div>
            </div>

             {/* Admission Requirements Section */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Admission Requirements</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">For New Students</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Original and photocopy of PSA Birth Certificate</li>
                            <li>Original and photocopy of Baptismal Certificate</li>
                            <li>2x2 recent colored photos with white background (2 copies)</li>
                            <li>Original Report Card (Form 138) with eligible for transfer status</li>
                            <li>Certificate of Good Moral Character from previous school</li>
                            <li>Accomplished Recommendation Form</li>
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">For Foreign Students</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>All requirements for new students (if applicable)</li>
                            <li>Photocopy of Alien Certificate of Registration (ACR I-Card)</li>
                            <li>Photocopy of student's passport (bio-page and visa page)</li>
                            <li>Study Permit issued by the Bureau of Immigration</li>
                            <li>Authenticated school records from the country of origin</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Tuition and Fees Section */}
            <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Schedule of Fees</h2>
                <div className="mb-6">
                    <label htmlFor="level-select" className="block text-lg font-medium text-gray-700 mb-2">Select Grade Level:</label>
                    <div className="relative max-w-sm">
                        <select
                            id="level-select"
                            value={selectedLevelId}
                            onChange={(e) => setSelectedLevelId(e.target.value)}
                            className="appearance-none block w-full bg-white text-gray-900 border border-gray-300 rounded-md shadow-sm py-3 px-4 pr-8 focus:outline-none focus:ring-green-600 focus:border-green-600 text-lg"
                        >
                            {FEE_SCHEDULES.map(schedule => (
                                <option key={schedule.id} value={schedule.id}>{schedule.level}</option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>

                {selectedSchedule && (
                    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in border border-gray-200">
                        <style>{`.animate-fade-in { animation: fadeIn 0.5s ease-out; } @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`}</style>
                        <h3 className="text-2xl font-bold text-battle-green mb-6 border-b pb-4">{selectedSchedule.level} - Fee Schedule</h3>
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                            <div>
                                <h4 className="text-xl font-semibold text-gray-800 mb-4">Fee Breakdown</h4>
                                <div className="space-y-2">
                                    {selectedSchedule.fees.map((fee, index) => (
                                        fee.isSpace ?
                                        <div key={index} className="pt-4"></div> :
                                        <div key={index} className={`flex justify-between items-center py-1 ${fee.isBold ? 'font-bold text-gray-900' : 'text-gray-700'}`}>
                                            <span>{fee.label}</span>
                                            <span>{fee.value}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 bg-green-50 p-4 rounded-md text-green-800 text-sm border-l-4 border-green-500">
                                    <p>{selectedSchedule.discount}</p>
                                </div>
                            </div>
                             <div>
                                <h4 className="text-xl font-semibold text-gray-800 mb-4">Requirements</h4>
                                <ul className="space-y-3">
                                    {selectedSchedule.requirements.map((req, index) => (
                                        <li key={index} className="flex items-start">
                                            <ChecklistIcon />
                                            <span className="ml-3 text-gray-700">{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </PageShell>
    );
};

export default Admissions;
