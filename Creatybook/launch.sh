echo "Instalando dependencias y actualizando el sistema..."
sudo apt-get update
sudo apt-get install -y curl git

echo "Instalando Node.js..."
if [ ! -d "$HOME/.nvm" ]; then
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
  export NVM_DIR="$HOME/.nvm"
  source "$NVM_DIR/nvm.sh"
fi

nvm install 20
nvm use 20

echo "Clonando Repositorio."
git clone https://github.com/ideosincrasia/Proxecto-DAW-24-25-Iago-Lojo-Lopez.git
cd Proxecto-DAW-24-25-Iago-Lojo-Lopez

echo "Instalando paquetes npm..."
npm install

# Configurar .env de ser necesario
echo "Comprobando si existe el archivo .env..."
if [ ! -f .env ]; then
  echo "⚠️ No se encontró archivo .env. ¿Quieres crearlo? (s/n)"
  read crear_env
  if [ "$crear_env" == "s" ]; then
    echo "PORT=3000" > .env
    echo "Añade tus variables en .env"
  fi
fi

echo "Lanzando la aplicación..."
npm start
