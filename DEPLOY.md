# Deploy — Hard Fork Landing

Static React + Vite site, served by nginx in a multi-stage Docker image.
Target: **Coolify** (build pack: Dockerfile), routed publicly via **Cloudflare Tunnel**.

## Artifacts

| File | Purpose |
|------|---------|
| `Dockerfile` | Multi-stage build (Node 22 → nginx 1.27 alpine). Listens on port **80**. |
| `nginx.conf` | SPA history fallback, gzip, asset caching, security headers. |
| `.dockerignore` | Keeps `node_modules`/`dist`/`.git` out of the build context. |
| `.npmrc` | `minimum-release-age=0` for reproducible CI installs. |
| `package.json` | `packageManager: pnpm@10.31.0` pins pnpm; `pnpm.onlyBuiltDependencies` approves esbuild. |

Image verified locally: `docker build -t hf-landing . && docker run -p 8080:80 hf-landing`.

## 1. Coolify application

- **Host:** Coolify on the `vtavano` server (m-cloud).
- **Source:** GitHub `mtavano/hf-landing`, branch `main`.
- **Build pack:** Dockerfile.
- **Container port:** `80` (nginx). **Published on host:** `6969`.
- **Health check:** the Dockerfile already defines one (`wget` on `/`).
- **Auto-deploy:** GitHub webhook on push to `main` → Coolify rebuilds.

## 2. Cloudflare Tunnel routing (already configured)

Cloudflare Tunnel is already set up and points `hardfork.cl` →
`http://localhost:6969` on the vtavano host. The Coolify app must therefore
publish the nginx container's port 80 on host port **6969**.

## Local preview of the production image

```bash
docker build -t hf-landing .
docker run --rm -p 8080:80 hf-landing
# open http://localhost:8080
```
