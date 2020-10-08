(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{744:function(e,t,n){"use strict";n.r(t);var s=n(27),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"installation-on-google-kubernetes-engine-gke"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installation-on-google-kubernetes-engine-gke"}},[e._v("#")]),e._v(" Installation on Google Kubernetes Engine (GKE)")]),e._v(" "),n("h2",{attrs:{id:"prerequisites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),n("ul",[n("li",[e._v("Google Cloud account: "),n("a",{attrs:{href:"http://cloud.google.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://cloud.google.com/"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("Install these tools locally if you're not using the Google Cloud Shell steps below:\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://cloud.google.com/sdk/docs#install_the_latest_cloud_tools_version_cloudsdk_current_version",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Cloud SDK"),n("OutboundLink")],1),e._v(" including gcloud")]),e._v(" "),n("li",[n("code",[e._v("kubectl")]),e._v(" command line tool")])])])]),e._v(" "),n("h2",{attrs:{id:"cluster-setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cluster-setup"}},[e._v("#")]),e._v(" Cluster Setup")]),e._v(" "),n("p",[e._v("These steps only need to be completed once per cluster.")]),e._v(" "),n("h3",{attrs:{id:"setup-and-connect-to-the-cluster"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setup-and-connect-to-the-cluster"}},[e._v("#")]),e._v(" Setup and Connect to the Cluster")]),e._v(" "),n("ol",[n("li",[e._v("Login to your Google Cloud account: "),n("a",{attrs:{href:"https://cloud.google.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cloud.google.com/"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("Go to "),n("code",[e._v("Kubernetes Engine -> Clusters")]),e._v(" and click "),n("code",[e._v("Create Cluster")])]),e._v(" "),n("li",[e._v("Enter a name and select a "),n("code",[e._v("Location type")]),e._v(" "),n("ul",[n("li",[e._v("The "),n("code",[e._v("Location type")]),e._v(" settings are up to you. The defaults are fine for an initial test.")])])]),e._v(" "),n("li",[e._v("Leave the "),n("code",[e._v("Master version")]),e._v(" on the default (e.g. "),n("code",[e._v("1.14.10-gke.36")]),e._v(")")]),e._v(" "),n("li",[e._v("On the left menu select "),n("code",[e._v("default-pool")])]),e._v(" "),n("li",[e._v("Under "),n("code",[e._v("Size")]),e._v(" set the "),n("code",[e._v("Number of nodes")]),e._v(" entry to 5.  (See "),n("a",{attrs:{href:"#appendix-a-cluster-sizing"}},[e._v("Appendix A")]),e._v(" for details.)")]),e._v(" "),n("li",[e._v("Click "),n("code",[e._v("Create")])]),e._v(" "),n("li",[e._v("Wait for the cluster to initialize. This will take a few minutes. There will be a green check mark when complete.")]),e._v(" "),n("li",[e._v("Click "),n("code",[e._v("Connect")]),e._v(" for your new cluster.")]),e._v(" "),n("li",[e._v("Click "),n("code",[e._v("Run in Cloud Shell")]),e._v(" "),n("ul",[n("li",[e._v("Alternatively, copy the provided command and execute it in your local environment to connect your local "),n("code",[e._v("kubectl")]),e._v(" to your GKE cluster.")])])]),e._v(" "),n("li",[e._v("Run "),n("code",[e._v("kubectl get namespaces")]),e._v(" to verify your connection:")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("a_user@cs-6000-devshell-vm-c34ef644-5584-4c5d-aa14-6e41af4a5c9a:~$ kubectl get namespaces\nNAME              STATUS   AGE\ndefault           Active   6m11s\nkube-node-lease   Active   6m12s\nkube-public       Active   6m12s\nkube-system       Active   6m13s\n\n")])])]),n("h3",{attrs:{id:"install-the-nginx-ingress-controller"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#install-the-nginx-ingress-controller"}},[e._v("#")]),e._v(" Install the NGINX Ingress Controller")]),e._v(" "),n("p",[e._v("Entando isn’t compatible out of the box  with the default ingress controller provided in GKE.\nSee here for more if you’re interested in GKE ingress: "),n("a",{attrs:{href:"https://cloud.google.com/kubernetes-engine/docs/concepts/ingress",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cloud.google.com/kubernetes-engine/docs/concepts/ingress"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("We’re going to install the NGINX ingress controller to manage the ingresses for Entando services\ndeployed by the operator. This will be a simpler and more adaptable configuration for most users and\nenvironments. Users who really need the GKE ingress controller (rare) could integrate it following\nthe instructions provided by GKE and then customize the service definition created by the Entando\noperator.")]),e._v(" "),n("p",[e._v("These are the minimal instructions to prepare NGINX ingress using the Google Cloud Shell. To install it\nusing your local "),n("code",[e._v("kubectl")]),e._v(" or to vary other settings please see the more detailed documents here:\n"),n("a",{attrs:{href:"https://cloud.google.com/community/tutorials/nginx-ingress-gke",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cloud.google.com/community/tutorials/nginx-ingress-gke"),n("OutboundLink")],1),e._v(" and "),n("a",{attrs:{href:"https://kubernetes.github.io/ingress-nginx/deploy/#gce-gke",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://kubernetes.github.io/ingress-nginx/deploy/#gce-gke"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("ol",[n("li",[e._v("Initialize your user as a cluster-admin:")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("kubectl create clusterrolebinding cluster-admin-binding --clusterrole cluster-admin \\\n--user $(gcloud config get-value account)\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[e._v("Install the ingress controller pods:")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/cloud/deploy.yaml\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[e._v("To check if the ingress controller pods have started, run the following command:")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("   kubectl get pods -n ingress-nginx \\\n     -l app.kubernetes.io/name=ingress-nginx --watch\n")])])]),n("ol",{attrs:{start:"4"}},[n("li",[e._v("Wait until the ingress-nginx-controller status changes to "),n("code",[e._v("Running")]),e._v(":")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("NAME                                        READY   STATUS      RESTARTS   AGE\ningress-nginx-admission-create-27tgt        0/1     Completed   0          65s\ningress-nginx-admission-patch-7wmgl         0/1     Completed   1          65s\ningress-nginx-controller-7656c59dc4-7xgmc   1/1     Running     0          75s\n")])])]),n("ol",{attrs:{start:"5"}},[n("li",[e._v("Get the external IP address for your ingress controller. Record the value of EXTERNAL-IP for "),n("code",[e._v("nginx-ingress-controller")]),e._v(" from the command below.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("kubectl get service -l app=nginx-ingress --namespace ingress-nginx\n")])])]),n("h3",{attrs:{id:"verify-the-nginx-ingress-install"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#verify-the-nginx-ingress-install"}},[e._v("#")]),e._v(" Verify the NGINX Ingress install")]),e._v(" "),n("p",[e._v("We recommend setting up a test application so you can easily verify the ingress is working.")]),e._v(" "),n("ol",[n("li",[e._v("From the "),n("code",[e._v("Cloud Shell,")]),e._v(" create a simple application by running the following command:")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("kubectl run hello-app --generator=run-pod/v1 --image=gcr.io/google-samples/hello-app:1.0 --port=8080\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[e._v("Expose the "),n("code",[e._v("hello-app")]),e._v(" Pod as a Service:")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("kubectl expose pod hello-app\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[e._v("Create an "),n("code",[e._v("ingress-resource.yaml")]),e._v(" file with this content:")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('apiVersion: extensions/v1beta1\nkind: Ingress\nmetadata:\n  name: ingress-resource\n  annotations:\n    kubernetes.io/ingress.class: nginx\n    nginx.ingress.kubernetes.io/ssl-redirect: "false"\nspec:\n  rules:\n  - http:\n      paths:\n      - path: /hello\n        backend:\n          serviceName: hello-app\n          servicePort: 8080\n')])])]),n("ol",{attrs:{start:"4"}},[n("li",[e._v("Now create the Ingress Resource using "),n("code",[e._v("kubectl apply -f ingress-resource.yaml")])]),e._v(" "),n("li",[e._v("Verify that the Ingress Resource has been created using "),n("code",[e._v("kubectl get ingress ingress-resource")]),e._v(".\nIt may take a few minutes for the "),n("code",[e._v("Address")]),e._v(" to be populated.")]),e._v(" "),n("li",[e._v("Verify you can access the web application by going to the "),n("code",[e._v("EXTERNAL-IP/hello")]),e._v(" address, using the\n"),n("code",[e._v("Address")]),e._v(" from the previous nginx-ingress-controller. You should see the following:")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Hello, world!\nVersion: 1.0.0\nHostname: hello-app\n")])])]),n("p",[e._v("Note the external IP address of your ingress controller since you’ll need it for the application configuration.\nThe Entando deployment exposes an environment variable to set the ingress controller to be used as part of the deployment. That variable is "),n("code",[e._v("ENTANDO_INGRESS_CLASS")]),e._v(" and should be set to "),n("code",[e._v("nginx")]),e._v(" in deployments to GKE (this is documented in the application instructions below as well)")]),e._v(" "),n("h3",{attrs:{id:"install-the-entando-custom-resource-definitions-crds"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#install-the-entando-custom-resource-definitions-crds"}},[e._v("#")]),e._v(" Install the Entando Custom Resource Definitions (CRDs)")]),e._v(" "),n("p",[e._v("Once per cluster you need to deploy the "),n("code",[e._v("Entando Custom Resources")]),e._v(".")]),e._v(" "),n("ol",[n("li",[e._v("Download the Custom Resource Definitions (CRDs) and unpack them:")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("curl -L -C - https://raw.githubusercontent.com/entando/entando-releases/v6.2.0/dist/qs/custom-resources.tar.gz | tar -xz\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[e._v("Install the Entando CRDs: "),n("code",[e._v("kubectl create -f dist/crd")])])]),e._v(" "),n("h2",{attrs:{id:"deploy-your-entando-application"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#deploy-your-entando-application"}},[e._v("#")]),e._v(" Deploy Your Entando Application")]),e._v(" "),n("p",[e._v("You can now deploy your Entando applications to GKE.")]),e._v(" "),n("h3",{attrs:{id:"setup-and-deploy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setup-and-deploy"}},[e._v("#")]),e._v(" Setup and Deploy")]),e._v(" "),n("ol",[n("li",[e._v("Download and unpack the entando-helm-quickstart release you want to use from here:\n"),n("a",{attrs:{href:"https://github.com/entando-k8s/entando-helm-quickstart/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando-k8s/entando-helm-quickstart/releases"),n("OutboundLink")],1),e._v(" "),n("ul",[n("li",[e._v("e.g. "),n("code",[e._v("curl -sfL https://github.com/entando-k8s/entando-helm-quickstart/archive/v6.2.0.tar.gz | tar xvz")])]),e._v(" "),n("li",[e._v("See the included README file for more information on the following steps.")])])]),e._v(" "),n("li",[e._v("Edit "),n("code",[e._v("values.yaml")]),e._v("in the root directory:\n"),n("ul",[n("li",[e._v("Set "),n("code",[e._v("supportOpenshift: false")])]),e._v(" "),n("li",[e._v("Set "),n("code",[e._v("ENTANDO_DEFAULT_ROUTING_SUFFIX")]),e._v(" to the IP value of your "),n("code",[e._v("nginx")]),e._v(" controller plus .nip.io\n"),n("ul",[n("li",[e._v("For example: "),n("code",[e._v("ENTANDO_DEFAULT_ROUTING_SUFFIX: 35.223.161.214.nip.io")])]),e._v(" "),n("li",[e._v("We’re using "),n("a",{attrs:{href:"https://nip.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://nip.io"),n("OutboundLink")],1),e._v(" because we need wildcard dns address resolution however nip.io is not required. If your enterprise has a different internal dns resolution scheme for development instances you can use that or other alternative dns services like xip.io.")])])]),e._v(" "),n("li",[e._v("If not already present, set these values to utilize nginx as the ingress controller and file system groups for persistent volume access:\n"),n("ul",[n("li",[n("code",[e._v('ENTANDO_INGRESS_CLASS: "nginx"')])]),e._v(" "),n("li",[n("code",[e._v('ENTANDO_REQUIRES_FILESYSTEM_GROUP_OVERRIDE: "true"')])])])]),e._v(" "),n("li",[e._v("See "),n("a",{attrs:{href:"#appendix-b-example-values-yaml-file-for-helm-quickstart"}},[e._v("Appendix B")]),e._v(" for an example values.yaml")])])]),e._v(" "),n("li",[e._v("Create the Entando namespace: "),n("code",[e._v("kubectl create namespace entando")])]),e._v(" "),n("li",[e._v("Update helm dependencies: "),n("code",[e._v("helm dependency update")])]),e._v(" "),n("li",[e._v("Run helm to generate the template file: "),n("code",[e._v("helm template my-app --namespace=entando ./ > my-app.yaml")])]),e._v(" "),n("li",[e._v("Deploy Entando via "),n("code",[e._v("kubectl create -f my-app.yaml")])]),e._v(" "),n("li",[e._v("Watch Entando startup "),n("code",[e._v("kubectl get pods -n entando --watch")])]),e._v(" "),n("li",[e._v("Check for the Entando ingresses using "),n("code",[e._v("kubectl describe ingress -n entando")]),e._v(". This is a snippet:")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("quickstart-entando.34.71.130.61.nip.io\n                                          /entando-de-app     quickstart-server-service:8080 (10.44.2.3:8080)\n                                          /digital-exchange   quickstart-server-service:8083 (10.44.2.3:8083)\n                                          /app-builder/       quickstart-server-service:8081 (10.44.2.3:8081)\n")])])]),n("ol",{attrs:{start:"9"}},[n("li",[e._v("Access Entando at the listed endpoints, e.g. Entando App Builder at "),n("code",[e._v("quickstart-entando.34.71.130.61.nip.io/app-builder/")])])]),e._v(" "),n("h3",{attrs:{id:"quickstart-with-embedded-databases"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#quickstart-with-embedded-databases"}},[e._v("#")]),e._v(" Quickstart with Embedded Databases")]),e._v(" "),n("p",[e._v("The lightest weight and fastest to deploy option for evaluation and getting started uses embedded databases for the application and Keycloak.\nTo deploy quickstart with embedded databases at the top of values.yaml add "),n("code",[e._v("dbms: none")]),e._v(" under the app section in the file. See Appendix B for an example.")]),e._v(" "),n("h3",{attrs:{id:"external-database"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#external-database"}},[e._v("#")]),e._v(" External Database")]),e._v(" "),n("p",[e._v("You can also use an external database instance for your application.\nThis is recommended for projects that will be developed for delivery to customers or stakeholders.\nAny dbms that is reachable from the cluster can be used.")]),e._v(" "),n("h4",{attrs:{id:"example-deploy-postgres-to-a-namespace-on-your-cluster"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-deploy-postgres-to-a-namespace-on-your-cluster"}},[e._v("#")]),e._v(" Example: Deploy Postgres to a Namespace on Your Cluster")]),e._v(" "),n("p",[e._v("These instructions will deploy a postgres instance to a namespace in your kubernetes cluster.")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/GoogleCloudPlatform/postgresql-docker/blob/master/9/README.md#run-a-postgresql-server-kubernetes",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/GoogleCloudPlatform/postgresql-docker/blob/master/9/README.md#run-a-postgresql-server-kubernetes"),n("OutboundLink")],1)]),e._v(" "),n("ul",[n("li",[e._v("Note: If deployed this way the address you use for the database in the helm template must be a full address rather than an IP address alone. Use the database IP plus nip.io for a dev instances")])]),e._v(" "),n("p",[e._v("Once deployed you can use the "),n("RouterLink",{attrs:{to:"/v6.2/tutorials/devops/external-database/"}},[e._v("external database instructions")]),e._v(" to\nconnect your Entando application to your instance.,")],1),e._v(" "),n("h4",{attrs:{id:"connect-cloudsql-to-gke"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connect-cloudsql-to-gke"}},[e._v("#")]),e._v(" Connect CloudSQL to GKE")]),e._v(" "),n("ul",[n("li",[e._v("This link describes creating a PG instances using the GCP Cloud SQL\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://cloud.google.com/sql/docs/postgres/create-instance",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cloud.google.com/sql/docs/postgres/create-instance"),n("OutboundLink")],1)])])]),e._v(" "),n("li",[e._v("Connecting from GKE to Cloud SQL\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://cloud.google.com/sql/docs/postgres/connect-kubernetes-engine",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cloud.google.com/sql/docs/postgres/connect-kubernetes-engine"),n("OutboundLink")],1)])])])]),e._v(" "),n("h2",{attrs:{id:"appendix-a-cluster-sizing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#appendix-a-cluster-sizing"}},[e._v("#")]),e._v(" Appendix A - Cluster Sizing")]),e._v(" "),n("p",[e._v("In the cluster setup instructions you set the number of nodes in your cluster to 5. This setting\nassumes the default node type with a single VCPU per instance and 3.8 GB of RAM. The kubernetes\nsystem and nginx will request approximately 1 CPU in total. The Entando application will deploy\non the remaining 4. This configuration is suitable for a development team but may need to be\nexpanded as microservices are added to the architecture.")]),e._v(" "),n("p",[e._v("If you’re running other applications (like a postgres instance) in your cluster you may need\nmore nodes.")]),e._v(" "),n("h3",{attrs:{id:"updating-the-nodes-in-your-cluster"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#updating-the-nodes-in-your-cluster"}},[e._v("#")]),e._v(" Updating the Nodes in Your Cluster")]),e._v(" "),n("ol",[n("li",[e._v("Select Kubernetes Engine from the left nav in GCP")]),e._v(" "),n("li",[e._v("Select Clusters")]),e._v(" "),n("li",[e._v("Hit the Edit button (pencil on the right)")]),e._v(" "),n("li",[e._v("Scroll to bottom")]),e._v(" "),n("li",[e._v("Click the link labeled default-pool")]),e._v(" "),n("li",[e._v("Edit button at the top")]),e._v(" "),n("li",[e._v("Change the nodes to the number you'd like to include")]),e._v(" "),n("li",[e._v("Save")]),e._v(" "),n("li",[e._v("Wait until updated on clusters page (green checkmark on cluster)")])]),e._v(" "),n("h2",{attrs:{id:"appendix-b-example-values-yaml-file-for-helm-quickstart"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#appendix-b-example-values-yaml-file-for-helm-quickstart"}},[e._v("#")]),e._v(" Appendix B - Example values.yaml file for Helm Quickstart")]),e._v(" "),n("p",[e._v("In the example below the application will deploy with embedded databases and will use "),n("code",[e._v("nginx")]),e._v("\nas the ingress controller. Replace "),n("code",[e._v("<YOUR-NGINX-IP>")]),e._v(" with the ip address where your "),n("code",[e._v("nginx")]),e._v("\ninstance is exposed on your cluster.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('app:\n name: quickstart\n dbms: none\noperator:\n supportOpenshift: false\n env:\n   ENTANDO_DOCKER_IMAGE_VERSION_FALLBACK: 6.0.0\n   #ENTANDO_DOCKER_REGISTRY_OVERRIDE: docker.io # Remove comment if you want to always use a specific docker registry\n   #ENTANDO_DOCKER_IMAGE_ORG_OVERRIDE: entando # Remove the comment if you want to always use a specific docker organization\n   ENTANDO_DEFAULT_ROUTING_SUFFIX: <YOUR-NGINX-IP>.nip.io\n   ENTANDO_POD_READINESS_TIMEOUT_SECONDS: "1000"\n   ENTANDO_POD_COMPLETION_TIMEOUT_SECONDS: "1000"\n   ENTANDO_DISABLE_KEYCLOAK_SSL_REQUIREMENT: "true"\n   ENTANDO_REQUIRES_FILESYSTEM_GROUP_OVERRIDE: "true"\n   ENTANDO_INGRESS_CLASS: "nginx"\n   ENTANDO_K8S_OPERATOR_IMPOSE_DEFAULT_LIMITS: "false"\n tls:\n   caCrt:\n   tlsCrt:\n   tlsKey:\ndeployPDA: false\n\n')])])])])}),[],!1,null,null,null);t.default=a.exports}}]);