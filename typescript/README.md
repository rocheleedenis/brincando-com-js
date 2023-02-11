# APRENDA TYPESCRIPT EM 13:37

Projetinho resultado do vídeo [Aprenda em 13:37: TypeScript](https://www.youtube.com/watch?v=cZpNkXb4Ge0).

Se você não tem o node instalado na sua máquina, mas tem o docker, suba um container usando o arquivo Dockerfile do projeto:

```bash
docker build -t node-16 .
docker run --rm -it --mount type=bind,source="$(pwd)"/,target=/app node-16 bash
```

Instale as dependências:

```bash
npm install
```

Agora vamos compilar e executar o código usando a ferramenta ts-node. Dessa forma ele ficará monitorando o nosso código e executará ele novamente a cada alteração.

```bash
npx ts-node-dev --respawn index.ts
```
