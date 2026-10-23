FROM node:22-alpine

WORKDIR /app

# Copiar dependencias primero para cachear capas
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto por defecto de Vite
EXPOSE 5173

# Iniciar Vite escuchando en todas las interfaces para Docker
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
