(function() {
    // Data Blob
    // =============================================================================
    // The main "blob" of site data constructed by liquid
    // We cherry pick to minimize size
    // Also because jsonify doesn't work quite right and collapses the page objects
    // into just strings when we jsonify the whole site
    var pages = [
        
        {
                name: "Appendices.md",
                title: "Appendices",
                url: "/Appendices.html",
                escapedPath: "Appendices.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["State Courts Practice Directions 2014","",["PART-01-Introduction.md","PART-02-Originating-Processes-And-Documents.md","PART-03-Simplified-Process-For-Civil-Proceedings-In-The-Magistrates-Court.md","PART-03A-Documents-Only-Proceedings.md","PART-04-Interlocutory-And-Other-Applications.md","PART-05-Hearings-Via-Skype.md","PART-06-Alternative-Dispute-Resolution.md","PART-07-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-08-Evidence-Witnesses-Affidavits-And-Exhibits.md","PART-09-Fixing-Of-Matters-For-Hearing.md","PART-10-Documents-And-Authorities-For-Use-In-Court.md","PART-11-Judgements-And-Orders.md","PART-12-Appeals.md","PART-13-Electronic-Filing-Service.md","PART-14-Execution-Matters.md","PART-15-Bills-Of-Costs-For-Taxation.md","PART-16-General-Matters.md","PART-17-Criminal-Matters.md","PART-18-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-19-Community-Disputes-Resolution.md","PART-20-Employment-Claims.md","PART-21-Defamation-Actions.md","PART-22-Business-To-Business-Debt-Claims.md","Part-23-Reference-to-Actuarial-Tables.md","Part-24-Simplified-proceedings-under-the-protection-from-harrasment-act.md","Part-25-Electronic-Filing-and-case-management-for-matters.md","Appendices.md"]]
            },
            
        {
                name: "PART-01-Introduction.md",
                title: "Part I: Introduction",
                url: "/PART-01-Introduction.html",
                escapedPath: "PART-01-Introduction.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["State Courts Practice Directions 2014","",["PART-01-Introduction.md","PART-02-Originating-Processes-And-Documents.md","PART-03-Simplified-Process-For-Civil-Proceedings-In-The-Magistrates-Court.md","PART-03A-Documents-Only-Proceedings.md","PART-04-Interlocutory-And-Other-Applications.md","PART-05-Hearings-Via-Skype.md","PART-06-Alternative-Dispute-Resolution.md","PART-07-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-08-Evidence-Witnesses-Affidavits-And-Exhibits.md","PART-09-Fixing-Of-Matters-For-Hearing.md","PART-10-Documents-And-Authorities-For-Use-In-Court.md","PART-11-Judgements-And-Orders.md","PART-12-Appeals.md","PART-13-Electronic-Filing-Service.md","PART-14-Execution-Matters.md","PART-15-Bills-Of-Costs-For-Taxation.md","PART-16-General-Matters.md","PART-17-Criminal-Matters.md","PART-18-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-19-Community-Disputes-Resolution.md","PART-20-Employment-Claims.md","PART-21-Defamation-Actions.md","PART-22-Business-To-Business-Debt-Claims.md","Part-23-Reference-to-Actuarial-Tables.md","Part-24-Simplified-proceedings-under-the-protection-from-harrasment-act.md","Part-25-Electronic-Filing-and-case-management-for-matters.md","Appendices.md"]]
            },
            
        {
                name: "PART-02-Originating-Processes-And-Documents.md",
                title: "Part II: Originating Processes and Documents",
                url: "/PART-02-Originating-Processes-And-Documents.html",
                escapedPath: "PART-02-Originating-Processes-And-Documents.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["State Courts Practice Directions 2014","",["PART-01-Introduction.md","PART-02-Originating-Processes-And-Documents.md","PART-03-Simplified-Process-For-Civil-Proceedings-In-The-Magistrates-Court.md","PART-03A-Documents-Only-Proceedings.md","PART-04-Interlocutory-And-Other-Applications.md","PART-05-Hearings-Via-Skype.md","PART-06-Alternative-Dispute-Resolution.md","PART-07-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-08-Evidence-Witnesses-Affidavits-And-Exhibits.md","PART-09-Fixing-Of-Matters-For-Hearing.md","PART-10-Documents-And-Authorities-For-Use-In-Court.md","PART-11-Judgements-And-Orders.md","PART-12-Appeals.md","PART-13-Electronic-Filing-Service.md","PART-14-Execution-Matters.md","PART-15-Bills-Of-Costs-For-Taxation.md","PART-16-General-Matters.md","PART-17-Criminal-Matters.md","PART-18-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-19-Community-Disputes-Resolution.md","PART-20-Employment-Claims.md","PART-21-Defamation-Actions.md","PART-22-Business-To-Business-Debt-Claims.md","Part-23-Reference-to-Actuarial-Tables.md","Part-24-Simplified-proceedings-under-the-protection-from-harrasment-act.md","Part-25-Electronic-Filing-and-case-management-for-matters.md","Appendices.md"]]
            },
            
        {
                name: "PART-03-Simplified-Process-For-Civil-Proceedings-In-The-Magistrates-Court.md",
                title: "Part III: Simplified Process for Civil Proceedings in the Magistrate’s Court",
                url: "/PART-03-Simplified-Process-For-Civil-Proceedings-In-The-Magistrates-Court.html",
                escapedPath: "PART-03-Simplified-Process-For-Civil-Proceedings-In-The-Magistrates-Court.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["State Courts Practice Directions 2014","",["PART-01-Introduction.md","PART-02-Originating-Processes-And-Documents.md","PART-03-Simplified-Process-For-Civil-Proceedings-In-The-Magistrates-Court.md","PART-03A-Documents-Only-Proceedings.md","PART-04-Interlocutory-And-Other-Applications.md","PART-05-Hearings-Via-Skype.md","PART-06-Alternative-Dispute-Resolution.md","PART-07-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-08-Evidence-Witnesses-Affidavits-And-Exhibits.md","PART-09-Fixing-Of-Matters-For-Hearing.md","PART-10-Documents-And-Authorities-For-Use-In-Court.md","PART-11-Judgements-And-Orders.md","PART-12-Appeals.md","PART-13-Electronic-Filing-Service.md","PART-14-Execution-Matters.md","PART-15-Bills-Of-Costs-For-Taxation.md","PART-16-General-Matters.md","PART-17-Criminal-Matters.md","PART-18-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-19-Community-Disputes-Resolution.md","PART-20-Employment-Claims.md","PART-21-Defamation-Actions.md","PART-22-Business-To-Business-Debt-Claims.md","Part-23-Reference-to-Actuarial-Tables.md","Part-24-Simplified-proceedings-under-the-protection-from-harrasment-act.md","Part-25-Electronic-Filing-and-case-management-for-matters.md","Appendices.md"]]
            },
            
        {
                name: "PART-03A-Documents-Only-Proceedings.md",
                title: "Part IIIA: “Documents-Only” Proceedings",
                url: "/PART-03A-Documents-Only-Proceedings.html",
                escapedPath: "PART-03A-Documents-Only-Proceedings.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["State Courts Practice Directions 2014","",["PART-01-Introduction.md","PART-02-Originating-Processes-And-Documents.md","PART-03-Simplified-Process-For-Civil-Proceedings-In-The-Magistrates-Court.md","PART-03A-Documents-Only-Proceedings.md","PART-04-Interlocutory-And-Other-Applications.md","PART-05-Hearings-Via-Skype.md","PART-06-Alternative-Dispute-Resolution.md","PART-07-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-08-Evidence-Witnesses-Affidavits-And-Exhibits.md","PART-09-Fixing-Of-Matters-For-Hearing.md","PART-10-Documents-And-Authorities-For-Use-In-Court.md","PART-11-Judgements-And-Orders.md","PART-12-Appeals.md","PART-13-Electronic-Filing-Service.md","PART-14-Execution-Matters.md","PART-15-Bills-Of-Costs-For-Taxation.md","PART-16-General-Matters.md","PART-17-Criminal-Matters.md","PART-18-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-19-Community-Disputes-Resolution.md","PART-20-Employment-Claims.md","PART-21-Defamation-Actions.md","PART-22-Business-To-Business-Debt-Claims.md","Part-23-Reference-to-Actuarial-Tables.md","Part-24-Simplified-proceedings-under-the-protection-from-harrasment-act.md","Part-25-Electronic-Filing-and-case-management-for-matters.md","Appendices.md"]]
            },
            
        {
                name: "PART-04-Interlocutory-And-Other-Applications.md",
                title: "Part IV: Interlocutory and other Applications",
                url: "/PART-04-Interlocutory-And-Other-Applications.html",
                escapedPath: "PART-04-Interlocutory-And-Other-Applications.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["State Courts Practice Directions 2014","",["PART-01-Introduction.md","PART-02-Originating-Processes-And-Documents.md","PART-03-Simplified-Process-For-Civil-Proceedings-In-The-Magistrates-Court.md","PART-03A-Documents-Only-Proceedings.md","PART-04-Interlocutory-And-Other-Applications.md","PART-05-Hearings-Via-Skype.md","PART-06-Alternative-Dispute-Resolution.md","PART-07-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-08-Evidence-Witnesses-Affidavits-And-Exhibits.md","PART-09-Fixing-Of-Matters-For-Hearing.md","PART-10-Documents-And-Authorities-For-Use-In-Court.md","PART-11-Judgements-And-Orders.md","PART-12-Appeals.md","PART-13-Electronic-Filing-Service.md","PART-14-Execution-Matters.md","PART-15-Bills-Of-Costs-For-Taxation.md","PART-16-General-Matters.md","PART-17-Criminal-Matters.md","PART-18-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-19-Community-Disputes-Resolution.md","PART-20-Employment-Claims.md","PART-21-Defamation-Actions.md","PART-22-Business-To-Business-Debt-Claims.md","Part-23-Reference-to-Actuarial-Tables.md","Part-24-Simplified-proceedings-under-the-protection-from-harrasment-act.md","Part-25-Electronic-Filing-and-case-management-for-matters.md","Appendices.md"]]
            },
            
        {
                name: "PART-05-Hearings-Via-Skype.md",
                title: "Part V: Remote Hearings",
                url: "/PART-05-Hearings-Via-Skype.html",
                escapedPath: "PART-05-Hearings-Via-Skype.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["State Courts Practice Directions 2014","",["PART-01-Introduction.md","PART-02-Originating-Processes-And-Documents.md","PART-03-Simplified-Process-For-Civil-Proceedings-In-The-Magistrates-Court.md","PART-03A-Documents-Only-Proceedings.md","PART-04-Interlocutory-And-Other-Applications.md","PART-05-Hearings-Via-Skype.md","PART-06-Alternative-Dispute-Resolution.md","PART-07-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-08-Evidence-Witnesses-Affidavits-And-Exhibits.md","PART-09-Fixing-Of-Matters-For-Hearing.md","PART-10-Documents-And-Authorities-For-Use-In-Court.md","PART-11-Judgements-And-Orders.md","PART-12-Appeals.md","PART-13-Electronic-Filing-Service.md","PART-14-Execution-Matters.md","PART-15-Bills-Of-Costs-For-Taxation.md","PART-16-General-Matters.md","PART-17-Criminal-Matters.md","PART-18-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-19-Community-Disputes-Resolution.md","PART-20-Employment-Claims.md","PART-21-Defamation-Actions.md","PART-22-Business-To-Business-Debt-Claims.md","Part-23-Reference-to-Actuarial-Tables.md","Part-24-Simplified-proceedings-under-the-protection-from-harrasment-act.md","Part-25-Electronic-Filing-and-case-management-for-matters.md","Appendices.md"]]
            },
            
        {
                name: "PART-06-Alternative-Dispute-Resolution.md",
                title: "Part VI: Alternative Dispute Resolution",
                url: "/PART-06-Alternative-Dispute-Resolution.html",
                escapedPath: "PART-06-Alternative-Dispute-Resolution.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["State Courts Practice Directions 2014","",["PART-01-Introduction.md","PART-02-Originating-Processes-And-Documents.md","PART-03-Simplified-Process-For-Civil-Proceedings-In-The-Magistrates-Court.md","PART-03A-Documents-Only-Proceedings.md","PART-04-Interlocutory-And-Other-Applications.md","PART-05-Hearings-Via-Skype.md","PART-06-Alternative-Dispute-Resolution.md","PART-07-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-08-Evidence-Witnesses-Affidavits-And-Exhibits.md","PART-09-Fixing-Of-Matters-For-Hearing.md","PART-10-Documents-And-Authorities-For-Use-In-Court.md","PART-11-Judgements-And-Orders.md","PART-12-Appeals.md","PART-13-Electronic-Filing-Service.md","PART-14-Execution-Matters.md","PART-15-Bills-Of-Costs-For-Taxation.md","PART-16-General-Matters.md","PART-17-Criminal-Matters.md","PART-18-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-19-Community-Disputes-Resolution.md","PART-20-Employment-Claims.md","PART-21-Defamation-Actions.md","PART-22-Business-To-Business-Debt-Claims.md","Part-23-Reference-to-Actuarial-Tables.md","Part-24-Simplified-proceedings-under-the-protection-from-harrasment-act.md","Part-25-Electronic-Filing-and-case-management-for-matters.md","Appendices.md"]]
            },
            
        {
                name: "PART-07-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md",
                title: "Part VII: Discovery and Inspection of Electronically Stored Documents",
                url: "/PART-07-Discovery-And-Inspection-Of-Electronically-Stored-Documents.html",
                escapedPath: "PART-07-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["State Courts Practice Directions 2014","",["PART-01-Introduction.md","PART-02-Originating-Processes-And-Documents.md","PART-03-Simplified-Process-For-Civil-Proceedings-In-The-Magistrates-Court.md","PART-03A-Documents-Only-Proceedings.md","PART-04-Interlocutory-And-Other-Applications.md","PART-05-Hearings-Via-Skype.md","PART-06-Alternative-Dispute-Resolution.md","PART-07-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-08-Evidence-Witnesses-Affidavits-And-Exhibits.md","PART-09-Fixing-Of-Matters-For-Hearing.md","PART-10-Documents-And-Authorities-For-Use-In-Court.md","PART-11-Judgements-And-Orders.md","PART-12-Appeals.md","PART-13-Electronic-Filing-Service.md","PART-14-Execution-Matters.md","PART-15-Bills-Of-Costs-For-Taxation.md","PART-16-General-Matters.md","PART-17-Criminal-Matters.md","PART-18-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-19-Community-Disputes-Resolution.md","PART-20-Employment-Claims.md","PART-21-Defamation-Actions.md","PART-22-Business-To-Business-Debt-Claims.md","Part-23-Reference-to-Actuarial-Tables.md","Part-24-Simplified-proceedings-under-the-protection-from-harrasment-act.md","Part-25-Electronic-Filing-and-case-management-for-matters.md","Appendices.md"]]
            },
            
        {
                name: "PART-08-Evidence-Witnesses-Affidavits-And-Exhibits.md",
                title: "Part VIII: Evidence – Witnesses, Affidavits and Exhibits",
                url: "/PART-08-Evidence-Witnesses-Affidavits-And-Exhibits.html",
                escapedPath: "PART-08-Evidence-Witnesses-Affidavits-And-Exhibits.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["State Courts Practice Directions 2014","",["PART-01-Introduction.md","PART-02-Originating-Processes-And-Documents.md","PART-03-Simplified-Process-For-Civil-Proceedings-In-The-Magistrates-Court.md","PART-03A-Documents-Only-Proceedings.md","PART-04-Interlocutory-And-Other-Applications.md","PART-05-Hearings-Via-Skype.md","PART-06-Alternative-Dispute-Resolution.md","PART-07-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-08-Evidence-Witnesses-Affidavits-And-Exhibits.md","PART-09-Fixing-Of-Matters-For-Hearing.md","PART-10-Documents-And-Authorities-For-Use-In-Court.md","PART-11-Judgements-And-Orders.md","PART-12-Appeals.md","PART-13-Electronic-Filing-Service.md","PART-14-Execution-Matters.md","PART-15-Bills-Of-Costs-For-Taxation.md","PART-16-General-Matters.md","PART-17-Criminal-Matters.md","PART-18-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-19-Community-Disputes-Resolution.md","PART-20-Employment-Claims.md","PART-21-Defamation-Actions.md","PART-22-Business-To-Business-Debt-Claims.md","Part-23-Reference-to-Actuarial-Tables.md","Part-24-Simplified-proceedings-under-the-protection-from-harrasment-act.md","Part-25-Electronic-Filing-and-case-management-for-matters.md","Appendices.md"]]
            },
            
        {
                name: "PART-09-Fixing-Of-Matters-For-Hearing.md",
                title: "Part IX: Fixing of Matters for Hearing",
                url: "/PART-09-Fixing-Of-Matters-For-Hearing.html",
                escapedPath: "PART-09-Fixing-Of-Matters-For-Hearing.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["State Courts Practice Directions 2014","",["PART-01-Introduction.md","PART-02-Originating-Processes-And-Documents.md","PART-03-Simplified-Process-For-Civil-Proceedings-In-The-Magistrates-Court.md","PART-03A-Documents-Only-Proceedings.md","PART-04-Interlocutory-And-Other-Applications.md","PART-05-Hearings-Via-Skype.md","PART-06-Alternative-Dispute-Resolution.md","PART-07-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-08-Evidence-Witnesses-Affidavits-And-Exhibits.md","PART-09-Fixing-Of-Matters-For-Hearing.md","PART-10-Documents-And-Authorities-For-Use-In-Court.md","PART-11-Judgements-And-Orders.md","PART-12-Appeals.md","PART-13-Electronic-Filing-Service.md","PART-14-Execution-Matters.md","PART-15-Bills-Of-Costs-For-Taxation.md","PART-16-General-Matters.md","PART-17-Criminal-Matters.md","PART-18-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-19-Community-Disputes-Resolution.md","PART-20-Employment-Claims.md","PART-21-Defamation-Actions.md","PART-22-Business-To-Business-Debt-Claims.md","Part-23-Reference-to-Actuarial-Tables.md","Part-24-Simplified-proceedings-under-the-protection-from-harrasment-act.md","Part-25-Electronic-Filing-and-case-management-for-matters.md","Appendices.md"]]
            },
            
        {
                name: "PART-10-Documents-And-Authorities-For-Use-In-Court.md",
                title: "Part X: Documents and Authorities for use in Court",
                url: "/PART-10-Documents-And-Authorities-For-Use-In-Court.html",
                escapedPath: "PART-10-Documents-And-Authorities-For-Use-In-Court.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["State Courts Practice Directions 2014","",["PART-01-Introduction.md","PART-02-Originating-Processes-And-Documents.md","PART-03-Simplified-Process-For-Civil-Proceedings-In-The-Magistrates-Court.md","PART-03A-Documents-Only-Proceedings.md","PART-04-Interlocutory-And-Other-Applications.md","PART-05-Hearings-Via-Skype.md","PART-06-Alternative-Dispute-Resolution.md","PART-07-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-08-Evidence-Witnesses-Affidavits-And-Exhibits.md","PART-09-Fixing-Of-Matters-For-Hearing.md","PART-10-Documents-And-Authorities-For-Use-In-Court.md","PART-11-Judgements-And-Orders.md","PART-12-Appeals.md","PART-13-Electronic-Filing-Service.md","PART-14-Execution-Matters.md","PART-15-Bills-Of-Costs-For-Taxation.md","PART-16-General-Matters.md","PART-17-Criminal-Matters.md","PART-18-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-19-Community-Disputes-Resolution.md","PART-20-Employment-Claims.md","PART-21-Defamation-Actions.md","PART-22-Business-To-Business-Debt-Claims.md","Part-23-Reference-to-Actuarial-Tables.md","Part-24-Simplified-proceedings-under-the-protection-from-harrasment-act.md","Part-25-Electronic-Filing-and-case-management-for-matters.md","Appendices.md"]]
            },
            
        {
                name: "PART-11-Judgements-And-Orders.md",
                title: "Part XI: Judgements and Orders",
                url: "/PART-11-Judgements-And-Orders.html",
                escapedPath: "PART-11-Judgements-And-Orders.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["State Courts Practice Directions 2014","",["PART-01-Introduction.md","PART-02-Originating-Processes-And-Documents.md","PART-03-Simplified-Process-For-Civil-Proceedings-In-The-Magistrates-Court.md","PART-03A-Documents-Only-Proceedings.md","PART-04-Interlocutory-And-Other-Applications.md","PART-05-Hearings-Via-Skype.md","PART-06-Alternative-Dispute-Resolution.md","PART-07-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-08-Evidence-Witnesses-Affidavits-And-Exhibits.md","PART-09-Fixing-Of-Matters-For-Hearing.md","PART-10-Documents-And-Authorities-For-Use-In-Court.md","PART-11-Judgements-And-Orders.md","PART-12-Appeals.md","PART-13-Electronic-Filing-Service.md","PART-14-Execution-Matters.md","PART-15-Bills-Of-Costs-For-Taxation.md","PART-16-General-Matters.md","PART-17-Criminal-Matters.md","PART-18-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-19-Community-Disputes-Resolution.md","PART-20-Employment-Claims.md","PART-21-Defamation-Actions.md","PART-22-Business-To-Business-Debt-Claims.md","Part-23-Reference-to-Actuarial-Tables.md","Part-24-Simplified-proceedings-under-the-protection-from-harrasment-act.md","Part-25-Electronic-Filing-and-case-management-for-matters.md","Appendices.md"]]
            },
            
        {
                name: "PART-12-Appeals.md",
                title: "Part XII: Appeals",
                url: "/PART-12-Appeals.html",
                escapedPath: "PART-12-Appeals.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["State Courts Practice Directions 2014","",["PART-01-Introduction.md","PART-02-Originating-Processes-And-Documents.md","PART-03-Simplified-Process-For-Civil-Proceedings-In-The-Magistrates-Court.md","PART-03A-Documents-Only-Proceedings.md","PART-04-Interlocutory-And-Other-Applications.md","PART-05-Hearings-Via-Skype.md","PART-06-Alternative-Dispute-Resolution.md","PART-07-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-08-Evidence-Witnesses-Affidavits-And-Exhibits.md","PART-09-Fixing-Of-Matters-For-Hearing.md","PART-10-Documents-And-Authorities-For-Use-In-Court.md","PART-11-Judgements-And-Orders.md","PART-12-Appeals.md","PART-13-Electronic-Filing-Service.md","PART-14-Execution-Matters.md","PART-15-Bills-Of-Costs-For-Taxation.md","PART-16-General-Matters.md","PART-17-Criminal-Matters.md","PART-18-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-19-Community-Disputes-Resolution.md","PART-20-Employment-Claims.md","PART-21-Defamation-Actions.md","PART-22-Business-To-Business-Debt-Claims.md","Part-23-Reference-to-Actuarial-Tables.md","Part-24-Simplified-proceedings-under-the-protection-from-harrasment-act.md","Part-25-Electronic-Filing-and-case-management-for-matters.md","Appendices.md"]]
            },
            
        {
                name: "PART-13-Electronic-Filing-Service.md",
                title: "Part XIII: Electronic Filing Service",
                url: "/PART-13-Electronic-Filing-Service.html",
                escapedPath: "PART-13-Electronic-Filing-Service.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["State Courts Practice Directions 2014","",["PART-01-Introduction.md","PART-02-Originating-Processes-And-Documents.md","PART-03-Simplified-Process-For-Civil-Proceedings-In-The-Magistrates-Court.md","PART-03A-Documents-Only-Proceedings.md","PART-04-Interlocutory-And-Other-Applications.md","PART-05-Hearings-Via-Skype.md","PART-06-Alternative-Dispute-Resolution.md","PART-07-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-08-Evidence-Witnesses-Affidavits-And-Exhibits.md","PART-09-Fixing-Of-Matters-For-Hearing.md","PART-10-Documents-And-Authorities-For-Use-In-Court.md","PART-11-Judgements-And-Orders.md","PART-12-Appeals.md","PART-13-Electronic-Filing-Service.md","PART-14-Execution-Matters.md","PART-15-Bills-Of-Costs-For-Taxation.md","PART-16-General-Matters.md","PART-17-Criminal-Matters.md","PART-18-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-19-Community-Disputes-Resolution.md","PART-20-Employment-Claims.md","PART-21-Defamation-Actions.md","PART-22-Business-To-Business-Debt-Claims.md","Part-23-Reference-to-Actuarial-Tables.md","Part-24-Simplified-proceedings-under-the-protection-from-harrasment-act.md","Part-25-Electronic-Filing-and-case-management-for-matters.md","Appendices.md"]]
            },
            
        {
                name: "PART-14-Execution-Matters.md",
                title: "Part XIV: Execution Matters",
                url: "/PART-14-Execution-Matters.html",
                escapedPath: "PART-14-Execution-Matters.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["State Courts Practice Directions 2014","",["PART-01-Introduction.md","PART-02-Originating-Processes-And-Documents.md","PART-03-Simplified-Process-For-Civil-Proceedings-In-The-Magistrates-Court.md","PART-03A-Documents-Only-Proceedings.md","PART-04-Interlocutory-And-Other-Applications.md","PART-05-Hearings-Via-Skype.md","PART-06-Alternative-Dispute-Resolution.md","PART-07-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-08-Evidence-Witnesses-Affidavits-And-Exhibits.md","PART-09-Fixing-Of-Matters-For-Hearing.md","PART-10-Documents-And-Authorities-For-Use-In-Court.md","PART-11-Judgements-And-Orders.md","PART-12-Appeals.md","PART-13-Electronic-Filing-Service.md","PART-14-Execution-Matters.md","PART-15-Bills-Of-Costs-For-Taxation.md","PART-16-General-Matters.md","PART-17-Criminal-Matters.md","PART-18-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-19-Community-Disputes-Resolution.md","PART-20-Employment-Claims.md","PART-21-Defamation-Actions.md","PART-22-Business-To-Business-Debt-Claims.md","Part-23-Reference-to-Actuarial-Tables.md","Part-24-Simplified-proceedings-under-the-protection-from-harrasment-act.md","Part-25-Electronic-Filing-and-case-management-for-matters.md","Appendices.md"]]
            },
            
        {
                name: "PART-15-Bills-Of-Costs-For-Taxation.md",
                title: "Part XV: Bills of Costs for Taxation",
                url: "/PART-15-Bills-Of-Costs-For-Taxation.html",
                escapedPath: "PART-15-Bills-Of-Costs-For-Taxation.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["State Courts Practice Directions 2014","",["PART-01-Introduction.md","PART-02-Originating-Processes-And-Documents.md","PART-03-Simplified-Process-For-Civil-Proceedings-In-The-Magistrates-Court.md","PART-03A-Documents-Only-Proceedings.md","PART-04-Interlocutory-And-Other-Applications.md","PART-05-Hearings-Via-Skype.md","PART-06-Alternative-Dispute-Resolution.md","PART-07-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-08-Evidence-Witnesses-Affidavits-And-Exhibits.md","PART-09-Fixing-Of-Matters-For-Hearing.md","PART-10-Documents-And-Authorities-For-Use-In-Court.md","PART-11-Judgements-And-Orders.md","PART-12-Appeals.md","PART-13-Electronic-Filing-Service.md","PART-14-Execution-Matters.md","PART-15-Bills-Of-Costs-For-Taxation.md","PART-16-General-Matters.md","PART-17-Criminal-Matters.md","PART-18-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-19-Community-Disputes-Resolution.md","PART-20-Employment-Claims.md","PART-21-Defamation-Actions.md","PART-22-Business-To-Business-Debt-Claims.md","Part-23-Reference-to-Actuarial-Tables.md","Part-24-Simplified-proceedings-under-the-protection-from-harrasment-act.md","Part-25-Electronic-Filing-and-case-management-for-matters.md","Appendices.md"]]
            },
            
        {
                name: "PART-16-General-Matters.md",
                title: "Part XVI: General Matters",
                url: "/PART-16-General-Matters.html",
                escapedPath: "PART-16-General-Matters.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["State Courts Practice Directions 2014","",["PART-01-Introduction.md","PART-02-Originating-Processes-And-Documents.md","PART-03-Simplified-Process-For-Civil-Proceedings-In-The-Magistrates-Court.md","PART-03A-Documents-Only-Proceedings.md","PART-04-Interlocutory-And-Other-Applications.md","PART-05-Hearings-Via-Skype.md","PART-06-Alternative-Dispute-Resolution.md","PART-07-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-08-Evidence-Witnesses-Affidavits-And-Exhibits.md","PART-09-Fixing-Of-Matters-For-Hearing.md","PART-10-Documents-And-Authorities-For-Use-In-Court.md","PART-11-Judgements-And-Orders.md","PART-12-Appeals.md","PART-13-Electronic-Filing-Service.md","PART-14-Execution-Matters.md","PART-15-Bills-Of-Costs-For-Taxation.md","PART-16-General-Matters.md","PART-17-Criminal-Matters.md","PART-18-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-19-Community-Disputes-Resolution.md","PART-20-Employment-Claims.md","PART-21-Defamation-Actions.md","PART-22-Business-To-Business-Debt-Claims.md","Part-23-Reference-to-Actuarial-Tables.md","Part-24-Simplified-proceedings-under-the-protection-from-harrasment-act.md","Part-25-Electronic-Filing-and-case-management-for-matters.md","Appendices.md"]]
            },
            
        {
                name: "PART-17-Criminal-Matters.md",
                title: "Part XVII: [Deleted]",
                url: "/PART-17-Criminal-Matters.html",
                escapedPath: "PART-17-Criminal-Matters.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["State Courts Practice Directions 2014","",["PART-01-Introduction.md","PART-02-Originating-Processes-And-Documents.md","PART-03-Simplified-Process-For-Civil-Proceedings-In-The-Magistrates-Court.md","PART-03A-Documents-Only-Proceedings.md","PART-04-Interlocutory-And-Other-Applications.md","PART-05-Hearings-Via-Skype.md","PART-06-Alternative-Dispute-Resolution.md","PART-07-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-08-Evidence-Witnesses-Affidavits-And-Exhibits.md","PART-09-Fixing-Of-Matters-For-Hearing.md","PART-10-Documents-And-Authorities-For-Use-In-Court.md","PART-11-Judgements-And-Orders.md","PART-12-Appeals.md","PART-13-Electronic-Filing-Service.md","PART-14-Execution-Matters.md","PART-15-Bills-Of-Costs-For-Taxation.md","PART-16-General-Matters.md","PART-17-Criminal-Matters.md","PART-18-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-19-Community-Disputes-Resolution.md","PART-20-Employment-Claims.md","PART-21-Defamation-Actions.md","PART-22-Business-To-Business-Debt-Claims.md","Part-23-Reference-to-Actuarial-Tables.md","Part-24-Simplified-proceedings-under-the-protection-from-harrasment-act.md","Part-25-Electronic-Filing-and-case-management-for-matters.md","Appendices.md"]]
            },
            
        {
                name: "PART-18-Electronic-Filing-And-Service-For-Criminal-Proceedings.md",
                title: "Part XVIII: [Deleted]",
                url: "/PART-18-Electronic-Filing-And-Service-For-Criminal-Proceedings.html",
                escapedPath: "PART-18-Electronic-Filing-And-Service-For-Criminal-Proceedings.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["State Courts Practice Directions 2014","",["PART-01-Introduction.md","PART-02-Originating-Processes-And-Documents.md","PART-03-Simplified-Process-For-Civil-Proceedings-In-The-Magistrates-Court.md","PART-03A-Documents-Only-Proceedings.md","PART-04-Interlocutory-And-Other-Applications.md","PART-05-Hearings-Via-Skype.md","PART-06-Alternative-Dispute-Resolution.md","PART-07-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-08-Evidence-Witnesses-Affidavits-And-Exhibits.md","PART-09-Fixing-Of-Matters-For-Hearing.md","PART-10-Documents-And-Authorities-For-Use-In-Court.md","PART-11-Judgements-And-Orders.md","PART-12-Appeals.md","PART-13-Electronic-Filing-Service.md","PART-14-Execution-Matters.md","PART-15-Bills-Of-Costs-For-Taxation.md","PART-16-General-Matters.md","PART-17-Criminal-Matters.md","PART-18-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-19-Community-Disputes-Resolution.md","PART-20-Employment-Claims.md","PART-21-Defamation-Actions.md","PART-22-Business-To-Business-Debt-Claims.md","Part-23-Reference-to-Actuarial-Tables.md","Part-24-Simplified-proceedings-under-the-protection-from-harrasment-act.md","Part-25-Electronic-Filing-and-case-management-for-matters.md","Appendices.md"]]
            },
            
        {
                name: "PART-19-Community-Disputes-Resolution.md",
                title: "Part XIX: [Deleted]",
                url: "/PART-19-Community-Disputes-Resolution.html",
                escapedPath: "PART-19-Community-Disputes-Resolution.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["State Courts Practice Directions 2014","",["PART-01-Introduction.md","PART-02-Originating-Processes-And-Documents.md","PART-03-Simplified-Process-For-Civil-Proceedings-In-The-Magistrates-Court.md","PART-03A-Documents-Only-Proceedings.md","PART-04-Interlocutory-And-Other-Applications.md","PART-05-Hearings-Via-Skype.md","PART-06-Alternative-Dispute-Resolution.md","PART-07-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-08-Evidence-Witnesses-Affidavits-And-Exhibits.md","PART-09-Fixing-Of-Matters-For-Hearing.md","PART-10-Documents-And-Authorities-For-Use-In-Court.md","PART-11-Judgements-And-Orders.md","PART-12-Appeals.md","PART-13-Electronic-Filing-Service.md","PART-14-Execution-Matters.md","PART-15-Bills-Of-Costs-For-Taxation.md","PART-16-General-Matters.md","PART-17-Criminal-Matters.md","PART-18-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-19-Community-Disputes-Resolution.md","PART-20-Employment-Claims.md","PART-21-Defamation-Actions.md","PART-22-Business-To-Business-Debt-Claims.md","Part-23-Reference-to-Actuarial-Tables.md","Part-24-Simplified-proceedings-under-the-protection-from-harrasment-act.md","Part-25-Electronic-Filing-and-case-management-for-matters.md","Appendices.md"]]
            },
            
        {
                name: "PART-20-Employment-Claims.md",
                title: "Part XX: [Deleted]",
                url: "/PART-20-Employment-Claims.html",
                escapedPath: "PART-20-Employment-Claims.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["State Courts Practice Directions 2014","",["PART-01-Introduction.md","PART-02-Originating-Processes-And-Documents.md","PART-03-Simplified-Process-For-Civil-Proceedings-In-The-Magistrates-Court.md","PART-03A-Documents-Only-Proceedings.md","PART-04-Interlocutory-And-Other-Applications.md","PART-05-Hearings-Via-Skype.md","PART-06-Alternative-Dispute-Resolution.md","PART-07-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-08-Evidence-Witnesses-Affidavits-And-Exhibits.md","PART-09-Fixing-Of-Matters-For-Hearing.md","PART-10-Documents-And-Authorities-For-Use-In-Court.md","PART-11-Judgements-And-Orders.md","PART-12-Appeals.md","PART-13-Electronic-Filing-Service.md","PART-14-Execution-Matters.md","PART-15-Bills-Of-Costs-For-Taxation.md","PART-16-General-Matters.md","PART-17-Criminal-Matters.md","PART-18-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-19-Community-Disputes-Resolution.md","PART-20-Employment-Claims.md","PART-21-Defamation-Actions.md","PART-22-Business-To-Business-Debt-Claims.md","Part-23-Reference-to-Actuarial-Tables.md","Part-24-Simplified-proceedings-under-the-protection-from-harrasment-act.md","Part-25-Electronic-Filing-and-case-management-for-matters.md","Appendices.md"]]
            },
            
        {
                name: "PART-21-Defamation-Actions.md",
                title: "Part XXI: Defamation Actions",
                url: "/PART-21-Defamation-Actions.html",
                escapedPath: "PART-21-Defamation-Actions.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["State Courts Practice Directions 2014","",["PART-01-Introduction.md","PART-02-Originating-Processes-And-Documents.md","PART-03-Simplified-Process-For-Civil-Proceedings-In-The-Magistrates-Court.md","PART-03A-Documents-Only-Proceedings.md","PART-04-Interlocutory-And-Other-Applications.md","PART-05-Hearings-Via-Skype.md","PART-06-Alternative-Dispute-Resolution.md","PART-07-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-08-Evidence-Witnesses-Affidavits-And-Exhibits.md","PART-09-Fixing-Of-Matters-For-Hearing.md","PART-10-Documents-And-Authorities-For-Use-In-Court.md","PART-11-Judgements-And-Orders.md","PART-12-Appeals.md","PART-13-Electronic-Filing-Service.md","PART-14-Execution-Matters.md","PART-15-Bills-Of-Costs-For-Taxation.md","PART-16-General-Matters.md","PART-17-Criminal-Matters.md","PART-18-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-19-Community-Disputes-Resolution.md","PART-20-Employment-Claims.md","PART-21-Defamation-Actions.md","PART-22-Business-To-Business-Debt-Claims.md","Part-23-Reference-to-Actuarial-Tables.md","Part-24-Simplified-proceedings-under-the-protection-from-harrasment-act.md","Part-25-Electronic-Filing-and-case-management-for-matters.md","Appendices.md"]]
            },
            
        {
                name: "PART-22-Business-To-Business-Debt-Claims.md",
                title: "PART XXII: [Deleted]",
                url: "/PART-22-Business-To-Business-Debt-Claims.html",
                escapedPath: "PART-22-Business-To-Business-Debt-Claims.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["State Courts Practice Directions 2014","",["PART-01-Introduction.md","PART-02-Originating-Processes-And-Documents.md","PART-03-Simplified-Process-For-Civil-Proceedings-In-The-Magistrates-Court.md","PART-03A-Documents-Only-Proceedings.md","PART-04-Interlocutory-And-Other-Applications.md","PART-05-Hearings-Via-Skype.md","PART-06-Alternative-Dispute-Resolution.md","PART-07-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-08-Evidence-Witnesses-Affidavits-And-Exhibits.md","PART-09-Fixing-Of-Matters-For-Hearing.md","PART-10-Documents-And-Authorities-For-Use-In-Court.md","PART-11-Judgements-And-Orders.md","PART-12-Appeals.md","PART-13-Electronic-Filing-Service.md","PART-14-Execution-Matters.md","PART-15-Bills-Of-Costs-For-Taxation.md","PART-16-General-Matters.md","PART-17-Criminal-Matters.md","PART-18-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-19-Community-Disputes-Resolution.md","PART-20-Employment-Claims.md","PART-21-Defamation-Actions.md","PART-22-Business-To-Business-Debt-Claims.md","Part-23-Reference-to-Actuarial-Tables.md","Part-24-Simplified-proceedings-under-the-protection-from-harrasment-act.md","Part-25-Electronic-Filing-and-case-management-for-matters.md","Appendices.md"]]
            },
            
        {
                name: "Part-23-Reference-to-Actuarial-Tables.md",
                title: "PART XXIII: Reference to Actuarial Tables for the Assessment of Damages in Personal Injury and Death Claims",
                url: "/Part-23-Reference-to-Actuarial-Tables.html",
                escapedPath: "Part-23-Reference-to-Actuarial-Tables.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["State Courts Practice Directions 2014","",["PART-01-Introduction.md","PART-02-Originating-Processes-And-Documents.md","PART-03-Simplified-Process-For-Civil-Proceedings-In-The-Magistrates-Court.md","PART-03A-Documents-Only-Proceedings.md","PART-04-Interlocutory-And-Other-Applications.md","PART-05-Hearings-Via-Skype.md","PART-06-Alternative-Dispute-Resolution.md","PART-07-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-08-Evidence-Witnesses-Affidavits-And-Exhibits.md","PART-09-Fixing-Of-Matters-For-Hearing.md","PART-10-Documents-And-Authorities-For-Use-In-Court.md","PART-11-Judgements-And-Orders.md","PART-12-Appeals.md","PART-13-Electronic-Filing-Service.md","PART-14-Execution-Matters.md","PART-15-Bills-Of-Costs-For-Taxation.md","PART-16-General-Matters.md","PART-17-Criminal-Matters.md","PART-18-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-19-Community-Disputes-Resolution.md","PART-20-Employment-Claims.md","PART-21-Defamation-Actions.md","PART-22-Business-To-Business-Debt-Claims.md","Part-23-Reference-to-Actuarial-Tables.md","Part-24-Simplified-proceedings-under-the-protection-from-harrasment-act.md","Part-25-Electronic-Filing-and-case-management-for-matters.md","Appendices.md"]]
            },
            
        {
                name: "Part-24-Simplified-proceedings-under-the-protection-from-harrasment-act.md",
                title: "PART XXIV: [Deleted]",
                url: "/Part-24-Simplified-proceedings-under-the-protection-from-harrasment-act.html",
                escapedPath: "Part-24-Simplified-proceedings-under-the-protection-from-harrasment-act.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["State Courts Practice Directions 2014","",["PART-01-Introduction.md","PART-02-Originating-Processes-And-Documents.md","PART-03-Simplified-Process-For-Civil-Proceedings-In-The-Magistrates-Court.md","PART-03A-Documents-Only-Proceedings.md","PART-04-Interlocutory-And-Other-Applications.md","PART-05-Hearings-Via-Skype.md","PART-06-Alternative-Dispute-Resolution.md","PART-07-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-08-Evidence-Witnesses-Affidavits-And-Exhibits.md","PART-09-Fixing-Of-Matters-For-Hearing.md","PART-10-Documents-And-Authorities-For-Use-In-Court.md","PART-11-Judgements-And-Orders.md","PART-12-Appeals.md","PART-13-Electronic-Filing-Service.md","PART-14-Execution-Matters.md","PART-15-Bills-Of-Costs-For-Taxation.md","PART-16-General-Matters.md","PART-17-Criminal-Matters.md","PART-18-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-19-Community-Disputes-Resolution.md","PART-20-Employment-Claims.md","PART-21-Defamation-Actions.md","PART-22-Business-To-Business-Debt-Claims.md","Part-23-Reference-to-Actuarial-Tables.md","Part-24-Simplified-proceedings-under-the-protection-from-harrasment-act.md","Part-25-Electronic-Filing-and-case-management-for-matters.md","Appendices.md"]]
            },
            
        {
                name: "Part-25-Electronic-Filing-and-case-management-for-matters.md",
                title: "PART XXV: [Deleted]",
                url: "/Part-25-Electronic-Filing-and-case-management-for-matters.html",
                escapedPath: "Part-25-Electronic-Filing-and-case-management-for-matters.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["State Courts Practice Directions 2014","",["PART-01-Introduction.md","PART-02-Originating-Processes-And-Documents.md","PART-03-Simplified-Process-For-Civil-Proceedings-In-The-Magistrates-Court.md","PART-03A-Documents-Only-Proceedings.md","PART-04-Interlocutory-And-Other-Applications.md","PART-05-Hearings-Via-Skype.md","PART-06-Alternative-Dispute-Resolution.md","PART-07-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-08-Evidence-Witnesses-Affidavits-And-Exhibits.md","PART-09-Fixing-Of-Matters-For-Hearing.md","PART-10-Documents-And-Authorities-For-Use-In-Court.md","PART-11-Judgements-And-Orders.md","PART-12-Appeals.md","PART-13-Electronic-Filing-Service.md","PART-14-Execution-Matters.md","PART-15-Bills-Of-Costs-For-Taxation.md","PART-16-General-Matters.md","PART-17-Criminal-Matters.md","PART-18-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-19-Community-Disputes-Resolution.md","PART-20-Employment-Claims.md","PART-21-Defamation-Actions.md","PART-22-Business-To-Business-Debt-Claims.md","Part-23-Reference-to-Actuarial-Tables.md","Part-24-Simplified-proceedings-under-the-protection-from-harrasment-act.md","Part-25-Electronic-Filing-and-case-management-for-matters.md","Appendices.md"]]
            },
            
        {
                name: "index.md",
                title: "State Courts Practice Directions 2014 (To be read with the Rules of Court (Cap. 322, R 5, 2014 Rev Ed))",
                url: "/",
                escapedPath: "index.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["State Courts Practice Directions 2014","",["PART-01-Introduction.md","PART-02-Originating-Processes-And-Documents.md","PART-03-Simplified-Process-For-Civil-Proceedings-In-The-Magistrates-Court.md","PART-03A-Documents-Only-Proceedings.md","PART-04-Interlocutory-And-Other-Applications.md","PART-05-Hearings-Via-Skype.md","PART-06-Alternative-Dispute-Resolution.md","PART-07-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-08-Evidence-Witnesses-Affidavits-And-Exhibits.md","PART-09-Fixing-Of-Matters-For-Hearing.md","PART-10-Documents-And-Authorities-For-Use-In-Court.md","PART-11-Judgements-And-Orders.md","PART-12-Appeals.md","PART-13-Electronic-Filing-Service.md","PART-14-Execution-Matters.md","PART-15-Bills-Of-Costs-For-Taxation.md","PART-16-General-Matters.md","PART-17-Criminal-Matters.md","PART-18-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-19-Community-Disputes-Resolution.md","PART-20-Employment-Claims.md","PART-21-Defamation-Actions.md","PART-22-Business-To-Business-Debt-Claims.md","Part-23-Reference-to-Actuarial-Tables.md","Part-24-Simplified-proceedings-under-the-protection-from-harrasment-act.md","Part-25-Electronic-Filing-and-case-management-for-matters.md","Appendices.md"]]
            },
            
        
    ]

    var pageIndex = {}
    var documentList = {}

    pages.forEach(function(page) {
        pageIndex[page.url] = page
        var documentTitle = page.documentInfo ? page.documentInfo[0] : 'root'
        if (documentList[documentTitle]) {
            documentList[documentTitle].push(page)
        } else {
            documentList[documentTitle] = [page]
        }
    })

    // Expose as global var
    root = typeof exports !== 'undefined' && exports !== null ? exports : this

    root.pageIndex = pageIndex;
    root.documentList = documentList;
})()