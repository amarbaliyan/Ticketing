
````markdown
# 🎟️ Ticketing Microservices (Client & Auth)

A microservices-based ticketing project with a **Next.js client** and a **Node.js/TypeScript authentication service**, orchestrated with **Kubernetes** and managed locally using **Skaffold**.

---

## ✨ Features

- 🛡️ **Auth Microservice** (Node.js, TypeScript, Express, MongoDB)
- 💻 **Client Microservice** (Next.js React app)
- ☸️ **Kubernetes** manifests for deployments, services, and ingress
- 📦 **Dockerized** for local and cloud usage
- ⚡ **Live development sync** with Skaffold

---

## 🧰 Prerequisites

Make sure the following tools are installed and configured:

- [Docker](https://www.docker.com/) (Desktop with Kubernetes enabled)
- [Kubernetes](https://kubernetes.io/) (via Docker Desktop, minikube, or kind)
- [`kubectl`](https://kubernetes.io/docs/tasks/tools/)
- [Skaffold](https://skaffold.dev/)
- [Node.js](https://nodejs.org/en/) `>= 18.x`
- `ticketing.dev` mapped to `localhost` (see below)

---

## ⚙️ Setup Steps

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd <your-repo-folder>
````

---

### 2. Update Your Hosts File

Add the following line to your `hosts` file:

* **Linux/Mac**: `/etc/hosts`
* **Windows**: `C:\Windows\System32\drivers\etc\hosts`

```
127.0.0.1 ticketing.dev
```

This maps `ticketing.dev` to `localhost` for Ingress routing.

---

### 3. Start Kubernetes & Install Ingress NGINX

#### ✅ Start Kubernetes

If using **Docker Desktop**, ensure Kubernetes is enabled in settings.

Or using **minikube**:

```bash
minikube start
```

#### ✅ Install Ingress NGINX

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/cloud/deploy.yaml
```

---

### 4. Create Kubernetes Secrets

#### 🔐 JWT Secret (required)

```bash
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=your_jwt_secret
```

#### 💳 Stripe Secret (optional, if using payments)

```bash
kubectl create secret generic stripe-secret --from-literal=STRIPE_KEY=your_stripe_secret
```

---

### 5. Build & Deploy with Skaffold

From the project root (where `skaffold.yaml` is):

```bash
skaffold dev
```

This will:

* Build Docker images for `auth` and `client`
* Apply Kubernetes manifests
* Sync code live with file-watching

---

### 6. Access the Application

Open your browser at:

```
http://ticketing.dev
```

---

## 🗂️ Project Structure

| Folder          | Description                       |
| --------------- | --------------------------------- |
| `auth/`         | Node.js/TypeScript Auth Service   |
| `client/`       | Next.js Client Application        |
| `infra/`        | Kubernetes manifests (YAML files) |
| `skaffold.yaml` | Skaffold configuration            |

---

## 🌱 Environment Variables

| Variable     | Description                         |
| ------------ | ----------------------------------- |
| `JWT_KEY`    | Used by Auth service (required)     |
| `STRIPE_KEY` | Used by Payments service (optional) |

All sensitive values should be stored in **Kubernetes secrets**.

---

## 🧪 Testing

### 🔹 Auth Service

```bash
cd auth
npm install
npm test
```

> Uses **Jest** and **Supertest**

---

## 🧾 Useful Commands

* View running pods:

  ```bash
  kubectl get pods
  ```

* View logs:

  ```bash
  kubectl logs <pod-name>
  ```

* Get secrets:

  ```bash
  kubectl get secrets
  ```

* Describe a pod or secret:

  ```bash
  kubectl describe pod <pod-name>
  kubectl describe secret <secret-name>
  ```

---

## 🚧 Ingress Admission Webhook Error?

You may need to remove the NGINX ingress webhook:

```bash
kubectl delete -A ValidatingWebhookConfiguration ingress-nginx-admission
```

---

## 🛠️ Tech Stack

* [Next.js](https://nextjs.org/)
* [React](https://reactjs.org/)
* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [MongoDB](https://www.mongodb.com/)
* [Docker](https://www.docker.com/)
* [Kubernetes](https://kubernetes.io/)
* [Skaffold](https://skaffold.dev/)
* [Jest](https://jestjs.io/) + [Supertest](https://github.com/visionmedia/supertest)

---

## 📂 Ignored Files

Per `.gitignore`, the following are excluded:

* `node_modules/`
* `.next/`
* `build/`
* `.env`, `.env.local`
* Log files, IDE config folders

---

## 📝 Notes

* **Live sync** is handled by Skaffold (see `skaffold.yaml`)
* **MongoDB** is expected to be a containerized service (not shown here)
* **Ingress routing** is defined in `infra/ingress-srv.yaml`

---

## 📜 License

This project is licensed under the **ISC License**.

---

## 💬 Questions or Contributions?

Feel free to [open an issue](https://github.com/your-username/your-repo/issues) or submit a PR!

```

---

### ✅ Next Steps
1. Rename this file to `README.md`
2. Place it in the root of your GitHub repo
3. Replace placeholders like `<your-repo-url>` and `your_jwt_secret`

Would you also like a matching `.env.example` file or a Kubernetes `mongo-deployment.yaml` example for local DB setup?
```
