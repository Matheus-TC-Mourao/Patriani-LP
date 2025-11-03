# Desafio Patriani

Este repositório contém a implementação de um **desafio técnico para a posição de Desenvolvedor Frontend**.
O objetivo é desenvolver uma **página web estática** baseada em um design do **Figma**, utilizando **Next.js**, **Tailwind CSS** e **TypeScript**.

---

## Descrição do Projeto

A aplicação exibe informações sobre um **empreendimento**, incluindo:

* Dados gerais;
* Localização;
* Fotos e imagens ilustrativas;
* Informações complementares.

As **imagens** podem ser **clicadas** para abrir um **modal com a visualização ampliada**.

---

##  Tecnologias Utilizadas

* Next.js
* TypeScript
* Tailwind CSS

---

## Como Executar o Projeto Localmente

```bash
# Clone o repositório
git clone https://github.com/Matheus-TC-Mourao/Patriani-LP.git

# Acesse o diretório
cd Patriani-LP

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev

# O projeto ficará disponível em:
http://localhost:3000
```

---

## 🌎 Deploy

O projeto pode ser acessado online em:
👉 [Demo](https://seu-projeto.vercel.app)

---
## Estrutura de Pastas

```bash
src
├── app/
├── assets/
├── components/
│   ├── icons/
│   ├── layout/
│   │   ├── dashboard/
│   │   │   ├── heading/
│   │   │   ├── infoCards/
│   │   │   ├── metric/
│   │   │   └── works/
│   │   ├── header/
│   │   │   ├── HeaderStatus.tsx
│   │   │   ├── HeaderTitle.tsx
│   │   │   └── page.tsx
│   │   └── pageHeader/
│   │       └── page.tsx
│   └── page.tsx
│
├── assets/
│   └── images/
│
├── components/
│   └── icons/
│
├── public/
└── node_modules/
```



