(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{629:function(e,t,n){"use strict";n.r(t);var a=n(27),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"release-notes-entando-6-1-0"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#release-notes-entando-6-1-0"}},[e._v("#")]),e._v(" Release Notes Entando 6.1.0")]),e._v(" "),n("h2",{attrs:{id:"highlights"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#highlights"}},[e._v("#")]),e._v(" Highlights")]),e._v(" "),n("h3",{attrs:{id:"helm-based-getting-started"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#helm-based-getting-started"}},[e._v("#")]),e._v(" Helm Based Getting Started")]),e._v(" "),n("p",[e._v("With the release of 6.1 Entando is using a Helm 2 client to assist in\nthe generation and installation of the full suite of Entando 6\ncapability. The new getting started simplifies the process of installing\nEntando 6 and automatically generates everything needed to install a\nfull Entando instance in your Kuberentes environment. Check out the helm\nbased getting started here: "),n("RouterLink",{attrs:{to:"/v6.1/docs/getting-started/"}},[e._v("Getting Started")])],1),e._v(" "),n("h3",{attrs:{id:"micro-frontend-configuration-in-app-builder"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#micro-frontend-configuration-in-app-builder"}},[e._v("#")]),e._v(" Micro Frontend Configuration in App Builder")]),e._v(" "),n("p",[e._v("The App Builder now gives developers the ability to create a micro\nfrontend to render configuration to the App Builder user when you add a\nwidget to a page. The configuration is stored in the Entando application\ndatabase and can be referenced by the runtime micro frontend via custom\ntags or an API call. Tutorials and more details in documentation:\n"),n("a",{attrs:{href:"../../tutorials/micro-frontends/widget-configuration"}},[e._v("Widget Configuration")])]),e._v(" "),n("h3",{attrs:{id:"new-process-driven-applications-micro-frontends"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#new-process-driven-applications-micro-frontends"}},[e._v("#")]),e._v(" New Process Driven Applications Micro Frontends")]),e._v(" "),n("p",[e._v("With the release of Entando 6.1 we are introducing an all new set of\nmicro frontends for Process Driven Applications (PDAs). The release\nincludes eight micro frontends (smart task inbox, task details, notes,\nattachments, form generation, summary card, and over time dashboard)\nthat integrate with your underlying process automation engine. The\nrelease also includes a default integration with Red Hat PAM. More on\nthe new PDA functionality in 6.1.0:\n"),n("a",{attrs:{href:"../concepts/pda-architecture"}},[e._v("PDA Architecture")])]),e._v(" "),n("h3",{attrs:{id:"entando-blueprint-bundle-generation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#entando-blueprint-bundle-generation"}},[e._v("#")]),e._v(" Entando Blueprint Bundle Generation")]),e._v(" "),n("p",[e._v("The Entando Blueprint now includes scripts and functionality to assist\ndevelopers in automatically generating a bundle for the ECR. The scripts\nbuild micro frontends and generate the Kubernetes custom resource\ndefinitions needed to deploy components created using the blueprint to\nthe ECR.")]),e._v(" "),n("h3",{attrs:{id:"entando-blueprint-local-development-updates"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#entando-blueprint-local-development-updates"}},[e._v("#")]),e._v(" Entando Blueprint Local Development Updates")]),e._v(" "),n("p",[e._v("With Entando 6.1 developers can now launch their blueprint generated\napplications without any changes. In prior versions developers were\nrequired to update CORs settings, add Options call support to security\nconfiguration, and to create environmental configuration to run their\nEntando Blueprint generated applications: "),n("a",{attrs:{href:"../../tutorials/micro-frontends/generate-micro-frontends-from-a-database-entity"}},[e._v("Blueprint")])]),e._v(" "),n("h3",{attrs:{id:"cms-enhancements-in-the-app-builder"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cms-enhancements-in-the-app-builder"}},[e._v("#")]),e._v(" CMS Enhancements in the App Builder")]),e._v(" "),n("p",[e._v("With Entando 6.1 the Entando CMS has been enhanced to include image\nediting and cropping, additional attribute types, updated layouts and\nuser interaction, an updated editor for hypertext content, and new asset\nsearch. The App Builder CMS also now includes the widgets that will\nallow a user to configure and render their content via the app builder\npage configuration screen. See documentation on the Entando 6.1 CMS here:\n"),n("a",{attrs:{href:"../../tutorials/cms/content-types-tutorial"}},[e._v("CMS Content Types")])]),e._v(" "),n("h3",{attrs:{id:"new-and-updated-cms-rest-apis"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#new-and-updated-cms-rest-apis"}},[e._v("#")]),e._v(" New and Updated CMS REST APIs")]),e._v(" "),n("p",[e._v("Entando 6.1 includes updates to the REST APIs exposed by the Entando\nCMS. In particular, updated support for advanced filtering and updates\nto APIs for image and document storage. Checkout the Entando Swagger\ndefinition for more details: "),n("RouterLink",{attrs:{to:"/v6.1/docs/reference/entando-apis.html"}},[e._v("Reference")])],1),e._v(" "),n("h3",{attrs:{id:"operator-and-kubernetes-infrastructure-updates"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#operator-and-kubernetes-infrastructure-updates"}},[e._v("#")]),e._v(" Operator and Kubernetes Infrastructure Updates")]),e._v(" "),n("p",[e._v("The infrastructure in Entando 6.1 includes significant changes to the\ndeployment workflow internal to the Entando infrastructure. Many of the\njobs performed by the operator have been updated to short lived run to\ncompletion pods to minimize resource utilization and to speed up overall\ndeployment time.")]),e._v(" "),n("h3",{attrs:{id:"added-the-ability-to-integrated-google-analytics-in-progressive-web-app"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#added-the-ability-to-integrated-google-analytics-in-progressive-web-app"}},[e._v("#")]),e._v(" Added the Ability to Integrated Google Analytics in Progressive Web App")]),e._v(" "),n("p",[e._v("The Entando Progressive Web App shell now provides support for including\na Google Analytics token to track page and content views in the\napplication. These changes are available as part of a manual upgrade to\na 5.x version of the PWA.")]),e._v(" "),n("h2",{attrs:{id:"tech-preview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tech-preview"}},[e._v("#")]),e._v(" Tech Preview")]),e._v(" "),n("p",[e._v("The release of Entando 6.1 also includes a new command line tool to\nsupport all of the operations needed to interact with the Entando\nplatform. Checkout the tech preview version of the tool and its usage\nhere "),n("a",{attrs:{href:"https://github.com/entando/entando-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando/entando-cli"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"released-image-versions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#released-image-versions"}},[e._v("#")]),e._v(" Released Image Versions")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("app-builder:  Image Version: 6.0.99\nentando-component-manager:  Image Version: 6.0.27\nentando-de-app:  Image Version: 6.0.45\nentando-de-app-eap:  Image Version: 6.0.45\nentando-de-app-wildfly:  Image Version: 6.0.45\nentando-k8s-app-controller:  Image Version: 6.0.33\nentando-k8s-app-plugin-link-controller:  Image Version: 6.0.9\nentando-k8s-cluster-infrastructure-controller:  Image Version: 6.0.27\nentando-k8s-composite-app-controller:  Image Version: 6.0.22\nentando-k8s-controller-coordinator:  Image Version: 6.0.66\nentando-k8s-dbjob:  Image Version: 6.0.32\nentando-k8s-keycloak-controller:  Image Version: 6.0.33\nentando-k8s-plugin-controller:  Image Version: 6.0.19\nentando-k8s-service:  Image Version: 6.0.17\nentando-keycloak:  Image Version: 6.0.11\nentando-plugin-sidecar:  Image Version: 6.0.2\nentando/entando-pam-app-wildfly:  Image Version:  6.1.0\nentando/entando-process-driven-plugin:  Image Version: 6.1.0\n")])])]),n("h2",{attrs:{id:"known-issues"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#known-issues"}},[e._v("#")]),e._v(" Known Issues")]),e._v(" "),n("p",[e._v("This section includes key known open items against the components\nreleased in Entando 6.1 that can impact user experience. The list is not\ncomprehensive. Check with your customer or professional services\nrepresentative for a full list or for questions.")]),e._v(" "),n("h3",{attrs:{id:"key-open-issues"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#key-open-issues"}},[e._v("#")]),e._v(" Key Open Issues")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("In the App Builder some composite list content types do not render\nor persist correctly ( Tracking ENG - 383, ENG-385, and ENG-363)")])]),e._v(" "),n("li",[n("p",[e._v("An available workaround is to use the legacy admin console to\ninteract with composite list content types and other content types\nnot yet supported")])]),e._v(" "),n("li",[n("p",[e._v("Page preview in the app builder when deployed on the default EAP and\nWildfly images doesn’t render correctly (Tracking ENG-338)")])]),e._v(" "),n("li",[n("p",[e._v("The page settings link on the page configuration screen doesn’t\npersist correctly As a workaround use the page settings under Page\nTree → Select Page → Edit")])]),e._v(" "),n("li",[n("p",[e._v("Editing an image that has been uploaded via the app builder can\nresult in errors (ENG-382) As a workaround use the image editing\ncapability in the legacy admin console")])]),e._v(" "),n("li",[n("p",[e._v("Direct Jira Link for Full Up to Date List of Open Items on 6.1\n"),n("a",{attrs:{href:"https://jira.entando.org/issues/?filter=10904",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://jira.entando.org/issues/?filter=10904"),n("OutboundLink")],1)])])]),e._v(" "),n("h2",{attrs:{id:"previous-releases"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#previous-releases"}},[e._v("#")]),e._v(" Previous Releases")]),e._v(" "),n("p",[n("a",{attrs:{href:"/old-version/old-version.html",target:"_blank"}},[e._v("Documentation for prior versions.\n"),n("svg",{staticClass:"icon outbound",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"}},[n("path",{attrs:{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}}),e._v(" "),n("polygon",{attrs:{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}})])])])])}),[],!1,null,null,null);t.default=r.exports}}]);