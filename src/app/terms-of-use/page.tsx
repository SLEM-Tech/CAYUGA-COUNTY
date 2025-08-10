"use client";
import React, { useEffect, useState } from "react";
import AppLayout from "@src/components/AppLayout";
import { useSearchParams } from "next/navigation";
import { CompanyName } from "@constants";
import RefundPolicy from "./_components/RefundPolicy";
import DeliveryReturn from "./_components/DeliveryReturn";

const Page = () => {
	const searchParams = useSearchParams().toString();
	const search = searchParams.replace(/=$/, "");
	const [activeTab, setActiveTab] = useState<string>("termsOfUse");

	useEffect(() => {
		if (search === "terms-of-use") {
			setActiveTab("termsOfUse");
		} else if (search === "privacy-policy") {
			setActiveTab("privacyPolicy");
		} else if (search === "delivery-return") {
			setActiveTab("deliveryReturn");
		} else if (search === "refund-policy") {
			setActiveTab("refundPolicy");
		}
	}, [search]);

	const handleTabClick = (tab: string) => {
		setActiveTab(tab);
	};

	return (
		<AppLayout>
			<main className='bg-white mx-auto mt-20 lg:mt-32 pb-12 lg:pb-24'>
				<section className='flex w-full flex-col items-center pt-8 xl:pt-16 gap-2 sm:gap-3 px-2 sm:px-8 md:px-16 text-center'>
					<h4 className='text-black text-base sm:text-xl font-semibold leading-[120%]'>
						Our Policies
					</h4>
					<h3 className='font-semibold text-xl sm:text-2xl md:text-3xl leading-[150%]'>
						Cayuga County Services Limited Policies
					</h3>
					<span className='text-xs sm:text-sm xl:text-base leading-[150%] text-black/80 sm:max-w-3xl slg:max-w-2xl'>
						At Cayuga County Services Limited, we specialize in delivering
						innovative software applications with focus on business
						productivity, automation solutions, and customer satisfaction while
						maintaining the highest standards of service excellence.
					</span>
					<div className='flex gap-2 mt-3 xl:mt-8 text-[10px] xs:text-xs sm:text-sm slg:text-base leading-[140%] bg-[#F5F5F5] p-1 rounded-md transition'>
						<button
							className={`px-2 xl:px-4 py-2 rounded-md ${
								activeTab === "termsOfUse"
									? "bg-white text-black"
									: "bg-[#F5F5F5] text-[#667085]"
							}`}
							onClick={() => handleTabClick("termsOfUse")}
						>
							Terms of use
						</button>
						<button
							className={`px-2 xl:px-4 py-2 rounded-md ${
								activeTab === "privacyPolicy"
									? "bg-white text-black"
									: "bg-[#F5F5F5] text-[#667085]"
							}`}
							onClick={() => handleTabClick("privacyPolicy")}
						>
							Privacy Policy
						</button>
						<button
							className={`px-2 xl:px-4 py-2 rounded-md ${
								activeTab === "deliveryReturn"
									? "bg-white text-black"
									: "bg-[#F5F5F5] text-[#667085]"
							}`}
							onClick={() => handleTabClick("deliveryReturn")}
						>
							Delivery & Return
						</button>
						<button
							className={`px-2 xl:px-4 py-2 rounded-md ${
								activeTab === "refundPolicy"
									? "bg-white text-black"
									: "bg-[#F5F5F5] text-[#667085]"
							}`}
							onClick={() => handleTabClick("refundPolicy")}
						>
							Refund Policy
						</button>
					</div>
				</section>

				<div className='flex mx-auto w-full mt-4 md:mt-8 text-base leading-[155%] px-2 sm:px-0 sm:max-w-xl slg:max-w-2xl pb-20'>
					{activeTab === "termsOfUse" && (
						<div id='termsOfUse' className='text-[#667085]'>
							<h4 className='text-base sm:text-xl xl:text-2xl font-semibold text-black capitalize'>
								Terms of Use - Cayuga County Services Limited
							</h4>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								By purchasing and using software applications from Cayuga County
								Services Limited, you agree to the following comprehensive terms
								and conditions governing our productivity and automation
								software solutions:
							</p>

							<ul className='list-disc pl-5 mt-2 space-y-2 text-xs md:text-sm xl:text-base'>
								<li>
									<span className='font-medium'>Software Portfolio:</span>{" "}
									Cayuga County Services specializes in business productivity
									software, workflow automation applications, project management
									tools, and industry-specific solutions. Our applications are
									designed to enhance efficiency, streamline operations, and
									improve business outcomes across various sectors.
								</li>
								<li>
									<span className='font-medium'>Licensing Framework:</span> All
									software applications are provided under non-exclusive
									licensing agreements with usage rights defined by license type
									(single-user, multi-user, or enterprise). Licenses include
									installation rights, updates during the license term, and
									technical support services.
								</li>
								<li>
									<span className='font-medium'>
										Business User Requirements:
									</span>{" "}
									Software purchasers must represent legitimate business
									entities or individual professionals. Corporate licenses
									require valid business registration documentation. Educational
									and non-profit organizations may qualify for special licensing
									terms.
								</li>
								<li>
									<span className='font-medium'>
										Installation & Configuration:
									</span>{" "}
									Software installation includes guided setup processes, initial
									configuration assistance, and compatibility verification.
									Multi-user installations include network configuration and
									user account management. Enterprise deployments include
									professional installation services.
								</li>
								<li>
									<span className='font-medium'>
										Data Integration & Migration:
									</span>{" "}
									Our software applications support data import from common
									business systems and formats. Migration services available for
									transitioning from competitor products. API integrations
									offered for connecting with existing business tools and
									platforms.
								</li>
								<li>
									<span className='font-medium'>Training & Onboarding:</span>{" "}
									Comprehensive training programs include video tutorials, user
									manuals, and live training sessions. Business users receive
									onboarding consultation to optimize software configuration for
									their specific workflows and requirements.
								</li>
								<li>
									<span className='font-medium'>
										Updates & Feature Enhancements:
									</span>{" "}
									Regular software updates include new features, security
									patches, and performance improvements. Feature requests from
									users are evaluated for inclusion in future releases. Beta
									testing programs available for early access to new
									functionality.
								</li>
								<li>
									<span className='font-medium'>
										Automation & Workflow Tools:
									</span>{" "}
									Advanced automation features require proper configuration and
									may have usage limitations based on license type. Workflow
									automation includes email notifications, scheduled tasks, and
									integration triggers. Custom automation setup assistance
									available.
								</li>
								<li>
									<span className='font-medium'>Business Compliance:</span>{" "}
									Software applications include features to support business
									compliance requirements including audit trails, data retention
									policies, and reporting capabilities. Industry-specific
									compliance modules available for regulated sectors.
								</li>
							</ul>

							<p className='mt-4 leading-[1.8] text-xs md:text-sm xl:text-base'>
								<span className='font-medium'>Performance Optimization:</span>{" "}
								Software applications are optimized for business environments
								with scalability features and performance monitoring. System
								resource requirements and optimization recommendations provided
								with each application.
							</p>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								<span className='font-medium'>Business Continuity:</span>{" "}
								Software includes backup and recovery features to protect
								business data. Cloud synchronization options available for
								multi-location access and data protection.
							</p>
						</div>
					)}

					{activeTab === "privacyPolicy" && (
						<div id='privacyPolicy' className='text-[#667085]'>
							<h4 className='text-sm sm:text-xl xl:text-2xl font-semibold text-black'>
								PRIVACY POLICY - CAYUGA COUNTY SERVICES LIMITED
							</h4>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								Cayuga County Services Limited is committed to protecting the
								privacy of our business software users. This policy explains how
								we collect, use, and safeguard information in our productivity
								and automation software applications designed for business
								environments.
							</p>

							<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
								BUSINESS SOFTWARE DATA COLLECTION
							</h4>

							<ul className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base list-decimal pl-4'>
								<li>
									Business account information (company name, contact details,
									license specifications)
								</li>
								<li>
									Software usage analytics and feature utilization for product
									improvement
								</li>
								<li>
									Business workflow data and automation configurations for
									optimization
								</li>
								<li>
									Technical performance data and system specifications for
									compatibility
								</li>
								<li>
									User training records and support interactions for service
									enhancement
								</li>
								<li>
									License activation data and multi-user access patterns for
									compliance
								</li>
								<li>
									Integration data for third-party business tool connections
								</li>
								<li>
									Backup and synchronization data for business continuity
									services
								</li>
							</ul>

							<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
								BUSINESS DATA USAGE PRACTICES
							</h4>

							<ul className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base list-disc pl-4'>
								<li>
									To provide business software applications and maintain
									functionality
								</li>
								<li>
									To optimize software performance for business productivity
									environments
								</li>
								<li>
									To deliver technical support and resolve business-critical
									issues
								</li>
								<li>
									To develop new features based on business user requirements
								</li>
								<li>
									To ensure software security and protect business data
									integrity
								</li>
								<li>
									To provide software updates and maintain license compliance
								</li>
								<li>
									To facilitate business workflow automation and integration
									services
								</li>
								<li>
									To support business continuity through backup and recovery
									services
								</li>
							</ul>

							<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
								BUSINESS DATA SECURITY MEASURES
							</h4>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								We implement enterprise-grade security protocols including
								encrypted data transmission, secure authentication systems, and
								role-based access controls. Business data is protected through
								isolated processing environments and regular security audits.
								Our software applications include built-in security features
								designed specifically for business environments and compliance
								requirements.
							</p>

							<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
								BUSINESS INTEGRATION PRIVACY
							</h4>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								Third-party business tool integrations operate under strict data
								protection agreements. Business data shared with integrated
								systems is limited to functional requirements only. API
								connections are secured and monitored for unauthorized access.
								All business integrations are documented and require explicit
								user authorization.
							</p>

							<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
								BUSINESS USER CONTROL & COMPLIANCE
							</h4>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								Business users maintain full control over their operational data
								and workflow configurations. Data export and migration tools are
								provided for business continuity purposes. Compliance reporting
								features support audit requirements and regulatory obligations.
								For business privacy inquiries and compliance support, contact
								privacy@cayugacounty.com.ng.
							</p>
						</div>
					)}

					{activeTab === "deliveryReturn" && (
						<div id='deliveryReturn' className='text-[#667085]'>
							<h3 className='font-semibold text-sm md:text-base xl:text-lg mb-2'>
								BUSINESS SOFTWARE DELIVERY & SUPPORT POLICY - CAYUGA COUNTY
								SERVICES
							</h3>

							<p className='text-xs md:text-sm xl:text-base mb-4'>
								Cayuga County Services Limited ensures efficient delivery of
								business software applications with comprehensive support
								services designed to maximize productivity and ensure successful
								implementation in business environments.
							</p>

							<div className='mb-6'>
								<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
									Business Software Delivery Process
								</h4>
								<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
									<li>
										Instant digital delivery for single-user licenses upon
										payment confirmation
									</li>
									<li>
										Enterprise licenses delivered within 4-8 hours with setup
										consultation included
									</li>
									<li>
										Multi-user installations include network deployment guides
										and configuration tools
									</li>
									<li>
										Cloud-based applications activated immediately with secure
										access credentials
									</li>
									<li>
										Custom business configurations delivered within 1-2 business
										days
									</li>
									<li>
										Priority delivery available for business-critical software
										deployments
									</li>
								</ul>
							</div>

							<div className='mb-6'>
								<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
									Implementation & Training Services
								</h4>
								<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
									<li>
										Professional implementation services for enterprise software
										deployments
									</li>
									<li>
										Business workflow analysis and software configuration
										optimization
									</li>
									<li>
										Comprehensive training programs for administrators and end
										users
									</li>
									<li>
										Live demonstration sessions and hands-on training workshops
									</li>
									<li>
										Custom training materials developed for specific business
										requirements
									</li>
									<li>
										Ongoing training support and refresher sessions available
									</li>
								</ul>
							</div>

							<div className='mb-6'>
								<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
									Business Integration Support
								</h4>
								<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
									<li>
										Data migration assistance from existing business systems
									</li>
									<li>
										API integration setup for connecting with current business
										tools
									</li>
									<li>
										Workflow automation configuration and optimization services
									</li>
									<li>
										Third-party application integration testing and validation
									</li>
									<li>
										Business process mapping and software alignment consultation
									</li>
									<li>
										System synchronization and data consistency verification
									</li>
								</ul>
							</div>

							<div className='mb-6'>
								<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
									Ongoing Support & Maintenance
								</h4>
								<div className='space-y-3'>
									<div>
										<p className='font-medium text-xs md:text-sm'>
											Business User Support:
										</p>
										<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
											<li>
												Priority technical support for business-critical
												applications
											</li>
											<li>
												Business hours support (8 AM - 6 PM) with extended hours
												available
											</li>
											<li>
												Dedicated account management for enterprise customers
											</li>
											<li>
												Remote assistance for complex configuration and
												troubleshooting
											</li>
										</ul>
									</div>
									<div>
										<p className='font-medium text-xs md:text-sm'>
											Software Maintenance:
										</p>
										<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
											<li>
												Automatic updates with business impact assessment and
												scheduling
											</li>
											<li>
												Feature enhancement releases based on business user
												feedback
											</li>
											<li>
												Security patches deployed with minimal business
												disruption
											</li>
											<li>
												Performance optimization and system health monitoring
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div className='mb-6'>
								<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
									Business Software Guarantees
								</h4>
								<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
									<li>
										60-day satisfaction guarantee for all business software
										applications
									</li>
									<li>
										Performance guarantees with service level agreements for
										enterprise users
									</li>
									<li>
										Business continuity assurance with backup and recovery
										support
									</li>
									<li>
										Compatibility guarantee with supported business operating
										systems
									</li>
									<li>
										Data security and compliance guarantee for regulated
										business environments
									</li>
									<li>
										Free software replacement if applications fail to meet
										business requirements
									</li>
								</ul>
							</div>

							<div className='mt-6 pt-4 border-t border-gray-200'>
								<h4 className='font-semibold text-xs md:text-sm xl:text-base mb-2'>
									Business Support Contact
								</h4>
								<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
									<li>Business Support: business@cayugacounty.com.ng</li>
									<li>Technical Support: support@cayugacounty.com.ng</li>
									<li>Enterprise Sales: enterprise@cayugacounty.com.ng</li>
									<li>Training Services: training@cayugacounty.com.ng</li>
									<li>Phone: +234-801-234-5004</li>
									<li>Website: www.cayugacounty.com.ng</li>
								</ul>
							</div>
						</div>
					)}

					{activeTab === "refundPolicy" && (
						<div id='refundPolicy' className='text-[#667085]'>
							<h3 className='font-semibold text-sm md:text-base xl:text-lg mb-2'>
								REFUND POLICY - CAYUGA COUNTY SERVICES LIMITED
							</h3>
							<p className='text-xs md:text-sm xl:text-base mb-4'>
								Effective Date: {new Date().toLocaleDateString("en-GB")}
							</p>

							<p className='text-xs md:text-sm xl:text-base mb-4'>
								At Cayuga County Services Limited, we are committed to
								delivering business software applications that enhance
								productivity and drive business success. Our refund policy is
								designed to ensure business user satisfaction while maintaining
								the quality and integrity of our software solutions.
							</p>

							<ul className='list-disc pl-5 space-y-3 leading-[1.8] text-xs md:text-sm xl:text-base'>
								<li>
									<span className='font-medium'>
										1. Business Software License Refunds
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											60-day satisfaction guarantee for all business software
											applications
										</li>
										<li>
											Full refund if software fails to deliver promised business
											functionality
										</li>
										<li>
											Performance-based refunds for applications that don't meet
											efficiency targets
										</li>
										<li>
											Integration failure refunds if software cannot connect
											with existing business systems
										</li>
										<li>
											Compatibility refunds for software that doesn't work with
											business operating environments
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										2. Enterprise & Multi-User License Refunds
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											Extended 90-day evaluation period for enterprise licenses
											over ₦300,000
										</li>
										<li>
											Prorated refunds for unused user licenses in multi-user
											packages
										</li>
										<li>
											Implementation failure refunds if enterprise deployment
											cannot be completed
										</li>
										<li>
											Business disruption refunds for software that negatively
											impacts operations
										</li>
										<li>
											Custom configuration refunds if software cannot be adapted
											to business requirements
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										3. Training & Implementation Service Refunds
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											Full refund if training programs don't meet advertised
											business objectives
										</li>
										<li>
											Implementation service refunds for unsuccessful software
											deployments
										</li>
										<li>
											Consultation refunds if business analysis doesn't provide
											actionable insights
										</li>
										<li>
											Configuration service refunds for setups that don't
											optimize business workflows
										</li>
										<li>
											Integration service refunds for failed third-party system
											connections
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										4. Non-Refundable Business Services
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											Successfully implemented software meeting all specified
											business requirements
										</li>
										<li>
											Training programs completed with certification and
											business improvement demonstrated
										</li>
										<li>
											Custom business software development after acceptance and
											deployment
										</li>
										<li>
											Third-party business tool licenses and integrations
											already activated
										</li>
										<li>
											Consultation services delivered according to agreed scope
											and timeline
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										5. Business Refund Request Process
									</span>
									<p className='mt-1'>To request a business software refund:</p>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>Email: refunds@cayugacounty.com.ng</li>
										<li>Business Support: +234-801-234-5004 (ext. 200)</li>
										<li>
											Provide business license documentation and usage reports
										</li>
										<li>
											Include detailed business impact assessment and specific
											issues
										</li>
										<li>
											Submit formal business refund request with supporting
											evidence
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										6. Business Impact Assessment
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											Business analyst review of software performance and
											requirements alignment
										</li>
										<li>
											ROI analysis for enterprise software implementations
										</li>
										<li>
											Business workflow assessment to identify software
											effectiveness
										</li>
										<li>
											Technical performance evaluation for business-critical
											applications
										</li>
										<li>
											Client consultation to explore business optimization
											alternatives
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										7. Business Resolution Alternatives
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											Software reconfiguration and optimization for improved
											business outcomes
										</li>
										<li>
											Additional training and consultation to maximize business
											value
										</li>
										<li>
											Software upgrade or alternative product recommendation
										</li>
										<li>
											Extended support and maintenance services as value
											compensation
										</li>
										<li>
											Business credit applied to future software or service
											purchases
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										8. Enterprise Customer Protections
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											Service level agreements with performance guarantees for
											enterprise clients
										</li>
										<li>
											Business continuity insurance for mission-critical
											software failures
										</li>
										<li>
											Dedicated account management for complex refund situations
										</li>
										<li>
											Executive escalation process for business-critical issues
										</li>
									</ul>
								</li>
							</ul>

							<div className='mt-6 pt-4 border-t border-gray-200'>
								<h4 className='font-semibold text-xs md:text-sm xl:text-base mb-2'>
									Contact Information
								</h4>
								<p className='text-xs md:text-sm xl:text-base'>
									For business software refunds and support:
								</p>
								<ul className='list-disc pl-5 mt-2 space-y-1 text-xs md:text-sm xl:text-base'>
									<li>Cayuga County Services Limited</li>
									<li>Email: refunds@cayugacounty.com.ng</li>
									<li>Business Support: business@cayugacounty.com.ng</li>
									<li>Phone: +234-801-234-5004</li>
									<li>Website: www.cayugacounty.com.ng</li>
								</ul>
							</div>
						</div>
					)}
				</div>
			</main>
		</AppLayout>
	);
};

export default Page;
