import React, { useState } from 'react';
import PageShell from '../components/PageShell';
import { FEE_SCHEDULES } from '../constants';

const ChecklistIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const ProcessStep: React.FC<{ number: number; title: string; description: string }> = ({ number, title, description }) => (
    <li className="flex">
        <div className="flex-shrink-0">
            <span className="flex items-center justify-center h-10 w-10 rounded-full bg-battle-green text-white font-bold text-lg">
                {number}
            </span>
        </div>
        <div className="ml-4">
            <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
            <p className="mt-1 text-gray-600">{description}</p>
        </div>
    </li>
);

const Admissions: React.FC = () => {
    const [selectedLevelId, setSelectedLevelId] = useState(FEE_SCHEDULES[0].id);
    const selectedSchedule = FEE_SCHEDULES.find(s => s.id === selectedLevelId);

    return (
        <PageShell title="Admissions">
            <div className="max-w-4xl">
                <p className="mb-12 text-xl text-gray-600">
                    Welcome to Southpoint School! Enrollment and Admissions for S.Y. 2025–2026 are now open. We’re excited that you’re considering becoming part of our family. To begin your journey with us, please review the steps and prepare the requirements outlined below.
                </p>
            </div>

            {/* Admission and Enrollment Flowchart Section */}
            <div className="mb-16">
                 <h2 className="text-3xl font-bold text-gray-800 mb-8">Admission & Enrollment Flowchart</h2>
                 <div className="bg-white p-8 rounded-lg shadow-lg">
                    <ol className="space-y-6">
                        <ProcessStep number={1} title="Inquiry" description="Parents or guardians inquire about the admission process by visiting the school, calling, or checking the website/FB Page." />
                        <ProcessStep number={2} title="Submit Required Documents" description={<>Applicants may complete the enrollment form <a href="https://forms.gle/6nzKZb8Euz1KAiQM7" target="_blank" rel="noopener noreferrer">online</a> or fill it out in person at the school. Along with the form, please submit the required documents such as the birth certificate and previous report cards.</>} />
                        <ProcessStep number={3} title="Application Review" description="The registrar reviews submitted documents to ensure completeness and correctness." />
                        <ProcessStep number={4} title="Interview / Assessment" description="Students may undergo an interview, entrance test, or readiness assessment, depending on the grade level." />
                        <ProcessStep number={5} title="Receive Admission Decision" description="The school notifies the applicant of the results of the admission process." />
                        <ProcessStep number={6} title="Payment of Fees" description="Upon acceptance, parents proceed with the payment of enrollment fees, either in full or through an installment plan." />
                        <ProcessStep number={7} title="Enrollment Confirmation" description="The school confirms the student's enrollment once payment is completed." />
                        <ProcessStep number={8} title="Class Assignment & Schedule" description="The student is officially enrolled and is assigned to a class with a provided schedule." />
                    </ol>
                 </div>
            </div>

             {/* Admission Requirements Section */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Admission Requirements</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-battle-green mb-4">New or Beginning Students</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start"><ChecklistIcon /><span className="ml-2">Result of the Entrance Test</span></li>
                            <li className="flex items-start"><ChecklistIcon /><span className="ml-2">PEPT Placement Test Result</span></li>
                            <li className="flex items-start"><ChecklistIcon /><span className="ml-2">Form 138 (Report Card)</span></li>
                            <li className="flex items-start"><ChecklistIcon /><span className="ml-2">Certificate of Good Moral Character</span></li>
                            <li className="flex items-start"><ChecklistIcon /><span className="ml-2">Letter of Recommendation (for JHS, SHS)</span></li>
                            <li className="flex items-start"><ChecklistIcon /><span className="ml-2">Interview</span></li>
                            <li className="flex items-start"><ChecklistIcon /><span className="ml-2">Health Record</span></li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-battle-green mb-4">Transferees</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start"><ChecklistIcon /><span className="ml-2">Entrance Test Result</span></li>
                            <li className="flex items-start"><ChecklistIcon /><span className="ml-2">Form 138 (Report Card)</span></li>
                            <li className="flex items-start"><ChecklistIcon /><span className="ml-2">Transfer Credentials</span></li>
                            <li className="flex items-start"><ChecklistIcon /><span className="ml-2">Interview</span></li>
                            <li className="flex items-start"><ChecklistIcon /><span className="ml-2">Certificate of Good Moral Character/Transfer</span></li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-battle-green mb-4">Foreign Students</h3>
                        <p className="font-semibold text-red-600 bg-red-100 p-2 rounded-md mb-4">Temporarily no admission</p>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start"><ChecklistIcon /><span className="ml-2">Entrance Test Result</span></li>
                            <li className="flex items-start"><ChecklistIcon /><span className="ml-2">Original Transcript of Records</span></li>
                            <li className="flex items-start"><ChecklistIcon /><span className="ml-2">Personal Data</span></li>
                            <li className="flex items-start"><ChecklistIcon /><span className="ml-2">Affidavit of Support</span></li>
                            <li className="flex items-start"><ChecklistIcon /><span className="ml-2">Alien Certificate of Registration</span></li>
                            <li className="flex items-start"><ChecklistIcon /><span className="ml-2">Student Visa</span></li>
                        </ul>
                    </div>
                </div>
            </div>

             {/* Enrollment Policy Highlights Section */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Enrollment Policy Highlights</h2>
                <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-500">
                    <ul className="list-disc list-inside space-y-3 text-gray-700">
                        <li>Enrollment at Southpoint School is for the <strong>entire school year</strong> and is on a <strong>first-come, first-served basis</strong>.</li>
                        <li>An <strong>enrollment fee of Php 5,000.00</strong> is required upon enrollment, with the remaining balance payable in nine (9) equal monthly amortizations.</li>
                        <li>A <strong>3% discount on tuition</strong> is offered for full payment of the school year's fees if paid by May 15 of the current year.</li>
                        <li><strong>Family Discounts:</strong> A 5% discount is available for the third sibling enrolled, and an 8% discount for succeeding siblings.</li>
                         <li><strong>Academic Scholars:</strong> Discounts are available for top-ranking high school students (Rank 1: 100%, Rank 2: 50%, Rank 3: 25%).</li>
                        <li>Withdrawal from enrollment requires written notification to the Principal or Registrar to avoid being charged for the entire school year.</li>
                    </ul>
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
