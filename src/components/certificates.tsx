"use client";

import { SectionWrapper } from "./section-wrapper";
import { SectionHeader } from "./section-header";
import { CertificateCard } from "./certificate-card";
import CertificateCardWithPDF from "./certificate-card-with-pdf";

interface Certificate {
  title: string;
  organization: string;
  date: string;
  verifyUrl: string;
}

const certificatesData = [
  {
    title: "DevNet Associate Certification",
    organization: "Cisco",
    date: "March 2025",
    verifyUrl: "/devnet.pdf"
  },
  {
    title: "Introduction to Data Science",
    organization: "Cisco ",
    date: "January 2025", 
    verifyUrl: "/Introduction to Data Science.pdf"
  },
  {
    title: "Data_Analytics_Bootcamp_Certification_of_Completion",
    organization: "Alex the Analyst",
    date: "January 2025",
    verifyUrl: "/Data_Analytics_Bootcamp_Certification_of_Completion.pdf"
  },
  {
    title: "CCNA-_Introduction_to_Networks",
    organization: "Cisco",
    date: "May 2023",
    verifyUrl: "/CCNA-_Introduction_to_Networks.pdf"
  },
  {
    title: "Network_Security",
    organization: "Cisco",
    date: "February 2023",
    verifyUrl: "/Network_Security.pdf"
  },
  {
    title: "Celo & Ushahidi Hackathon",
    organization: "Celo & Ushahidi Hackathon",
    date: "January 2023",
    verifyUrl: "/celoushahidi.pdf"
  },
  {
    title: "Oracle Primavera Training",
    organization: "Oracle ",
    date: "November 2022",
    verifyUrl: "/3 Oracle Primavera Training.pdf"
  },
  {
    title: "Hack For Earth Certificate of Participation-1",
    organization: "Hack For Earth Foundation",
    date: "November 2022",
    verifyUrl: "/Hack For Earth Certificate of Participation-1.pdf"
  },
  {
    title: "Cyber Ranges MITRE ATT&CK Fundamentals",
    organization: "Cyber Ranges",
    date: "October 2022",
    verifyUrl: "/Cyber Ranges MITRE ATT&CK Fundamentals.pdf"
  },
  {
    title: "Robotics for social Change",
    organization: "American Spaces, US Embassy Kenya and STEM IMPACT CENTER ",
    date: "July 2022",
    verifyUrl: "/Robotics for social Change.pdf"
  },
  {
    title: "Gender Hackathon_certificate of participation",
    organization: "polygon and harmony",
    date: "April 2022",
    verifyUrl: "/Gender Hackathon_certificate of participation.pdf"
  },
  {
    title: "OCI Associate",
    organization: "Oracle",
    date: "February 2022",
    verifyUrl: "/3 oci associate.pdf"
  },
  {
    title: "OCI certified",
    organization: "Oracle",
    date: "February 2024",
    verifyUrl: "/oci certified.pdf"
  },
  {
    title: "HCIA Data center Facility",
    organization: "Huawei",
    date: "January 2022",
    verifyUrl: "/3 HCIA Data center Facility.pdf"
  },
  {
    title: "Cybersecurity_Essentials",
    organization: "Cisco",
    date: "November 2021",
    verifyUrl: "/Cybersecurity_Essentials.pdf"
  },
  {
    title: "HCIA DATACOM",
    organization: "Huawei",
    date: "November 2021",
    verifyUrl: "/HCIA DATACOM.pdf"
  },
  {
    title: "Oracle bootcamp",
    organization: "Oracle",
    date: "October 2021",
    verifyUrl: "/Oracle bootcamp.pdf"
  },
  {
    title: "Network Programming Fundamentals",
    organization: "Cisco DevNet",
    date: "February 2024", 
    verifyUrl: "/devnet.pdf"
  },
  {
    title: "HCIA Security",
    organization: "Huawei",
    date: "September 2021",
    verifyUrl: "/HCIA Security.pdf"
  },
  {
    title: "CyberOps_Associate",
    organization: "Cisco ",
    date: "May 2021",
    verifyUrl: "/CyberOps_Associate.pdf"
  },
  {
    title: "Cisco Women RockIT",
    organization: "Cisco",
    date: "June 2021",
    verifyUrl: "/Cisco Women RockIT.pdf"
  },
  {
    title: "Cisco IPD Program",
    organization: "Cisco",
    date: "May 2021",
    verifyUrl: "/Cisco IPD Program.pdf"
  },
  {
    title: "CCNA-_Enterprise_Networking-_Security-_and_Automation",
    organization: "Cisco",
    date: "December 202o",
    verifyUrl: "/CCNA-_Enterprise_Networking-_Security-_and_Automation.pdf"
  },
  {
    title: "HCIA big data",
    organization: "Huawei",
    date: "November 2020",
    verifyUrl: "/HCIA big data.pdf"
  },
  {
    title: "HCIA big data",
    organization: "Huawei",
    date: "November 2020",
    verifyUrl: "/HCIA big data.pdf"
  },

  {
    title: "CCNA-_Switching-_Routing",
    organization: "Cisco",
    date: "September 2020",
    verifyUrl: "/CCNA-_Switching-_Routing.pdf"
  },


  
];

export function Certificates() {
  return (
    <SectionWrapper id="certificates" className="bg-secondary" style={{ perspective: '2000px' }}>
      <SectionHeader 
        title="Certifications"
        description="A collection of my professional certifications and completed courses."
      />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {certificatesData.map((cert, index) => (
          <CertificateCardWithPDF 
            key={index} 
            certificate={cert} 
            index={index} 
          />
        ))}
      </div>
    </SectionWrapper>
  );
}