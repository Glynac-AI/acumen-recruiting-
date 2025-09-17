// src/components/pricing/PricingTables.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Package, Video, FileText, Users } from "lucide-react";

const PricingTables = () => {
    // Tab state for switching between package types
    const [activeTab, setActiveTab] = useState<string>("talent-snapshot");

    // Function to get classes for tab buttons
    const getTabClasses = (tab: string) => {
        return `py-3 px-5 rounded-lg text-sm font-medium transition-all duration-300 ${activeTab === tab
                ? "bg-[#4F6BFF] text-white shadow-md shadow-[#4F6BFF]/20"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`;
    };

    // Define types for pricing package structures
    interface BasicPackage {
        option: string;
        price: string;
    }

    interface CompletePackage extends BasicPackage {
        original: string;
        savings: string;
    }

    interface PricingLevel {
        level: string;
        packages: BasicPackage[] | CompletePackage[];
    }

    // Pricing data based on the provided structure
    const talentSnapshotData: PricingLevel[] = [
        {
            level: "Entry-Level (0-60k)",
            packages: [
                { option: "20 candidates", price: "$250" },
                { option: "50 candidates", price: "$500" },
                { option: "100 candidates", price: "$850" }
            ]
        },
        {
            level: "Mid-Level (60k-120k)",
            packages: [
                { option: "20 candidates", price: "$450" },
                { option: "50 candidates", price: "$950" },
                { option: "100 candidates", price: "$1,700" }
            ]
        },
        {
            level: "Senior-Level (120k-300k)",
            packages: [
                { option: "20 candidates", price: "$650" },
                { option: "50 candidates", price: "$1,450" },
                { option: "100 candidates", price: "$2,500" }
            ]
        }
    ];

    const talentDeepDiveData: PricingLevel[] = [
        {
            level: "Entry-Level (0-60k)",
            packages: [
                { option: "10 candidates", price: "$350" },
                { option: "20 candidates", price: "$600" },
                { option: "50 candidates", price: "$1,350" }
            ]
        },
        {
            level: "Mid-Level (60k-120k)",
            packages: [
                { option: "10 candidates", price: "$650" },
                { option: "20 candidates", price: "$1,200" },
                { option: "50 candidates", price: "$2,700" }
            ]
        },
        {
            level: "Senior-Level (120k-300k)",
            packages: [
                { option: "10 candidates", price: "$950" },
                { option: "20 candidates", price: "$1,750" },
                { option: "50 candidates", price: "$3,950" }
            ]
        }
    ];

    const completeTalentPackData: { level: string, packages: CompletePackage[] }[] = [
        {
            level: "Entry-Level (0-60k)",
            packages: [
                { option: "Starter (10 snapshots + 5 deepdives)", original: "$300", price: "$255", savings: "$45" },
                { option: "Growth (25 snapshots + 10 deepdives)", original: "$600", price: "$510", savings: "$90" },
                { option: "Enterprise (50 snapshots + 20 deepdives)", original: "$1,100", price: "$935", savings: "$165" }
            ]
        },
        {
            level: "Mid-Level (60k-120k)",
            packages: [
                { option: "Starter", original: "$550", price: "$468", savings: "$82" },
                { option: "Growth", original: "$1,125", price: "$956", savings: "$169" },
                { option: "Enterprise", original: "$2,150", price: "$1,828", savings: "$322" }
            ]
        },
        {
            level: "Senior-Level (120k-300k)",
            packages: [
                { option: "Starter", original: "$800", price: "$680", savings: "$120" },
                { option: "Growth", original: "$1,675", price: "$1,424", savings: "$251" },
                { option: "Enterprise", original: "$3,200", price: "$2,720", savings: "$480" }
            ]
        }
    ];

    const successFeeData = [
        { role: "0-60k", fee: "$600" },
        { role: "60k-120k", fee: "$2,200" },
        { role: "120k-300k", fee: "$6,500" }
    ];

    const aumTransferableData = [
        { level: "$50 million+", packageFee: "$4,000", successFee: "$15,000", total: "$19,000" },
        { level: "$100 million+", packageFee: "$6,000", successFee: "$25,000", total: "$31,000" },
        { level: "$150 million+", packageFee: "$8,000", successFee: "$35,000", total: "$43,000" }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Main product packages */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-20"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-4 text-center">
                            Recruitment Packages
                        </h2>
                        <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
                            Choose from our three tailored recruitment solutions or bundle them together for maximum value
                        </p>

                        {/* Package type tabs */}
                        <div className="flex flex-wrap justify-center gap-3 mb-10">
                            <button
                                onClick={() => setActiveTab("talent-snapshot")}
                                className={getTabClasses("talent-snapshot")}
                            >
                                <div className="flex items-center gap-2">
                                    <Video className="w-4 h-4" />
                                    <span>Talent Snapshot™</span>
                                </div>
                            </button>
                            <button
                                onClick={() => setActiveTab("talent-deepdive")}
                                className={getTabClasses("talent-deepdive")}
                            >
                                <div className="flex items-center gap-2">
                                    <FileText className="w-4 h-4" />
                                    <span>Talent DeepDive™</span>
                                </div>
                            </button>
                            <button
                                onClick={() => setActiveTab("complete-talent-pack")}
                                className={getTabClasses("complete-talent-pack")}
                            >
                                <div className="flex items-center gap-2">
                                    <Package className="w-4 h-4" />
                                    <span>Complete Talent Pack™</span>
                                </div>
                            </button>
                        </div>

                        {/* Package descriptions */}
                        <div className="bg-gray-50 p-6 rounded-xl mb-10">
                            {activeTab === "talent-snapshot" && (
                                <div className="flex items-start gap-4">
                                    <div className="bg-[#4F6BFF]/10 p-3 rounded-lg text-[#4F6BFF]">
                                        <Video className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-xl mb-2">Talent Snapshot™ (Video Introductions)</h3>
                                        <p className="text-muted-foreground">
                                            Brief video introductions from pre-screened candidates that give you a quick sense of their
                                            communication style, presentation, and initial fit. This helps you efficiently filter candidates
                                            before investing in deeper interviews.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {activeTab === "talent-deepdive" && (
                                <div className="flex items-start gap-4">
                                    <div className="bg-[#4F6BFF]/10 p-3 rounded-lg text-[#4F6BFF]">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-xl mb-2">Talent DeepDive™ (Structured Interviews)</h3>
                                        <p className="text-muted-foreground">
                                            Comprehensive recorded interviews that thoroughly assess candidate skills, experience, and
                                            cultural fit. These structured interviews follow a proven framework for wealth management roles,
                                            saving you hours of initial screening time.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {activeTab === "complete-talent-pack" && (
                                <div className="flex items-start gap-4">
                                    <div className="bg-[#4F6BFF]/10 p-3 rounded-lg text-[#4F6BFF]">
                                        <Package className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-xl mb-2">Complete Talent Pack™ (15% Bundled Discount)</h3>
                                        <p className="text-muted-foreground">
                                            Our most effective solution combining both Talent Snapshots and DeepDives at a 15% discount.
                                            This comprehensive approach allows you to quickly screen candidates via video introductions,
                                            then dive deeper with only the most promising matches.
                                        </p>
                                        <div className="mt-2 flex items-center gap-2 text-[#4F6BFF]">
                                            <span className="text-sm font-medium">Exclusive benefits included</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Pricing tables */}
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="py-4 px-6 text-left text-sm font-medium text-gray-500">Role Level</th>
                                        <th className="py-4 px-6 text-left text-sm font-medium text-gray-500">Package Options</th>
                                        {activeTab === "complete-talent-pack" && (
                                            <th className="py-4 px-6 text-left text-sm font-medium text-gray-500">Original Value</th>
                                        )}
                                        <th className="py-4 px-6 text-left text-sm font-medium text-gray-500">Price</th>
                                        {activeTab === "complete-talent-pack" && (
                                            <th className="py-4 px-6 text-left text-sm font-medium text-gray-500">You Save</th>
                                        )}
                                        <th className="py-4 px-6 text-left text-sm font-medium text-gray-500"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {/* Render appropriate data based on active tab */}
                                    {(activeTab === "talent-snapshot"
                                        ? talentSnapshotData
                                        : activeTab === "talent-deepdive"
                                            ? talentDeepDiveData
                                            : completeTalentPackData).map((level, levelIndex) => (
                                                <React.Fragment key={levelIndex}>
                                                    {level.packages.map((pkg, pkgIndex) => (
                                                        <tr key={`${levelIndex}-${pkgIndex}`} className="hover:bg-gray-50">
                                                            {pkgIndex === 0 && (
                                                                <td className="py-4 px-6 align-top" rowSpan={level.packages.length}>
                                                                    <span className="font-medium text-gray-900">{level.level}</span>
                                                                </td>
                                                            )}
                                                            <td className="py-4 px-6">{pkg.option}</td>
                                                            {activeTab === "complete-talent-pack" && (
                                                                <td className="py-4 px-6 text-gray-500">
                                                                    {(pkg as CompletePackage).original}
                                                                </td>
                                                            )}
                                                            <td className="py-4 px-6">
                                                                <span className="font-medium text-gray-900">{pkg.price}</span>
                                                            </td>
                                                            {activeTab === "complete-talent-pack" && (
                                                                <td className="py-4 px-6">
                                                                    <span className="text-green-600 font-medium">
                                                                        {(pkg as CompletePackage).savings}
                                                                    </span>
                                                                </td>
                                                            )}
                                                            <td className="py-4 px-6">
                                                                <button className="inline-flex items-center text-sm font-medium text-[#4F6BFF] hover:text-[#3A56E8] transition-colors">
                                                                    Get Started
                                                                    <ArrowRight className="ml-1 w-4 h-4" />
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </React.Fragment>
                                            ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>

                    {/* Success Fee Structure */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-20"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-4 text-center">
                            Success Fee Structure
                        </h2>
                        <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
                            Only charged upon successful placement of a candidate
                        </p>

                        <div className="max-w-3xl mx-auto overflow-hidden bg-white rounded-xl border border-gray-200 shadow-sm">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="py-4 px-6 text-left text-sm font-medium text-gray-500">Role Compensation</th>
                                        <th className="py-4 px-6 text-left text-sm font-medium text-gray-500">Success Fee</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {successFeeData.map((item, index) => (
                                        <tr key={index} className="hover:bg-gray-50">
                                            <td className="py-4 px-6 font-medium">{item.role}</td>
                                            <td className="py-4 px-6 font-medium text-gray-900">{item.fee}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>

                    {/* AUM-Transferable Advisors */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-4 text-center">
                            AUM-Transferable Advisors
                        </h2>
                        <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
                            Specialized pricing for financial advisors bringing client assets
                        </p>

                        <div className="max-w-4xl mx-auto overflow-hidden bg-white rounded-xl border border-gray-200 shadow-sm">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="py-4 px-6 text-left text-sm font-medium text-gray-500">AUM Level</th>
                                        <th className="py-4 px-6 text-left text-sm font-medium text-gray-500">Package Fee</th>
                                        <th className="py-4 px-6 text-left text-sm font-medium text-gray-500">Success Fee</th>
                                        <th className="py-4 px-6 text-left text-sm font-medium text-gray-500">Total Max Fee</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {aumTransferableData.map((item, index) => (
                                        <tr key={index} className="hover:bg-gray-50">
                                            <td className="py-4 px-6 font-medium">{item.level}</td>
                                            <td className="py-4 px-6">{item.packageFee}</td>
                                            <td className="py-4 px-6">{item.successFee}</td>
                                            <td className="py-4 px-6 font-medium text-gray-900">{item.total}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PricingTables;