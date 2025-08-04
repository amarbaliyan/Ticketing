Ticketing Microservices (Client & Auth)
A microservices-based ticketing project with a Next.js client and a Node.js/TypeScript authentication service, orchestrated with Kubernetes and managed locally using Skaffold.

Features
Auth Microservice (Node.js, TypeScript, Express, MongoDB)

Client Microservice (Next.js React app)

Kubernetes manifests for deployments, services, ingress

Dockerized for local and cloud use

Seamless local dev experience with Skaffold & live sync

Prerequisites
Docker (ensure Docker Desktop running)

Kubernetes (local cluster via Docker Desktop, minikube, or kind)

kubectl

Skaffold

Node.js >=18.x (for running tools locally)

ticketing.dev domain mapped to localhost (see "Hosts file" below)

Setup Steps
1. Clone the Repository
bash
git clone <your-repo-url>
cd <your-repo-folder>
2. Update Your Hosts File
Add the following to your /etc/hosts (Linux/Mac) or C:\Windows\System32\drivers\etc\hosts (Windows):

text
127.0.0.1 ticketing.dev
This maps ticketing.dev to localhost for ingress routing.

3. Start Kubernetes and Install Ingress NGINX
Start Your Local Kubernetes Cluster
Docker Desktop: Make sure Kubernetes is enabled in Docker Desktop settings.

Or using minikube:

bash
minikube start
Install NGINX Ingress Controller
bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/cloud/deploy.yaml
4. Create Kubernetes Secrets
Create the JWT secret for authentication:

bash
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=your_jwt_secret
If using Stripe payments, set the Stripe key as well:

bash
kubectl create secret generic stripe-secret --from-literal=STRIPE_KEY=your_stripe_secret
5. Build & Deploy with Skaffold
In the root directory (where skaffold.yaml exists):

bash
skaffold dev
This will:

Build Docker images for auth and client services

Deploy Kubernetes manifests from infra/k8s

Live sync code for fast local development

6. Access the Application
Open: http://ticketing.dev

Project Structure
Folder	Description
auth/	Node.js/TypeScript Auth Service
client/	Next.js Client Application
infra/k8s/	Kubernetes manifests (deployment, services, ingress)
Environment Variables
JWT_KEY: Used by the Auth service for signing JWTs. Set as Kubernetes secret.

STRIPE_KEY: (Optional) Used for Stripe payments; set as secret if using Payments service.

Development
The auth service uses TypeScript and Express, with a MongoDB container.

The client service is a Next.js React app.

Both are dockerized and managed via Kuberenetes.

Useful Commands
Get list of running pods:

bash
kubectl get pods
Get pod logs:

bash
kubectl logs <pod-name>
Get Kubernetes secrets:

bash
kubectl get secrets
Describe secret or pod:

bash
kubectl describe secrets <secret-name>
kubectl describe pods <pod-name>
If Ingress Admission Error Occurs:
You may need to delete the NGINX ingress webhook:

bash
kubectl delete -A ValidatingWebhookConfiguration ingress-nginx-admission
Testing
Auth Service

bash
cd auth
npm install
npm test
Tech Stack
Next.js (client)

React

Node.js

TypeScript

Express

MongoDB (auth service DB)

Jest/Supertest (for auth unit/integration tests)

Docker & Kubernetes

Skaffold

Ignored Files
node_modules/, .next/, build/, .env, logs, IDE configs are all ignored per .gitignore

Notes & Troubleshooting
Live reload/sync: Handled by Skaffold, see skaffold.yaml

MongoDB deployed as Kubernetes service for persistent auth data

Ingress rules: See ingress-srv.yaml. All /api/users routes go to auth-srv; all others go to client-srv.

License
This project is licensed under the ISC License.

Feel free to copy-paste this README.md and adjust project/repo names as needed for your use-case.
