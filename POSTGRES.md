# PostgreSQL com Docker - Guia de Uso

## 🚀 Comandos Básicos

### Iniciar o servidor
```bash
docker-compose up -d
```

### Parar o servidor
```bash
docker-compose down
```

### Parar e remover volumes (apaga todos os dados)
```bash
docker-compose down -v
```

### Ver logs do PostgreSQL
```bash
docker-compose logs postgres
docker-compose logs -f postgres  # modo follow (tempo real)
```

### Verificar status dos containers
```bash
docker ps
```

### Reiniciar o container
```bash
docker-compose restart postgres
```

## 🔌 Dados de Conexão

- **Host:** `localhost`
- **Porta:** `5432`
- **Banco de Dados:** `orm_node`
- **Usuário:** `admin`
- **Senha:** `admin123`

### String de Conexão
```
postgresql://admin:admin123@localhost:5432/orm_node
```

## 💻 Acessar o PostgreSQL via CLI

### Entrar no container
```bash
docker exec -it postgres_sequelize bash
```

### Conectar ao PostgreSQL (dentro do container)
```bash
psql -U admin -d orm_node
```

### Ou diretamente (sem entrar no container)
```bash
docker exec -it postgres_sequelize psql -U admin -d orm_node
```

## 📊 Comandos PostgreSQL Úteis

Dentro do `psql`:

```sql
\l                    -- Listar todos os bancos de dados
\dt                   -- Listar todas as tabelas
\d nome_tabela        -- Descrever estrutura de uma tabela
\du                   -- Listar usuários
\c nome_banco         -- Conectar a outro banco de dados
\q                    -- Sair do psql

-- Exemplos de queries
SELECT * FROM pessoas;
SELECT * FROM cursos;
```

## 🔧 Configuração no Sequelize

### Instalar dependências (já instalado)
```bash
npm install sequelize pg pg-hstore
```

### Exemplo de configuração
```javascript
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('orm_node', 'admin', 'admin123', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
});

// Testar conexão
sequelize.authenticate()
  .then(() => console.log('Conexão estabelecida com sucesso!'))
  .catch(err => console.error('Erro ao conectar:', err));
```

## 🛠️ Troubleshooting

### Porta já em uso
Se a porta 5432 já estiver em uso, edite o `docker-compose.yml`:
```yaml
ports:
  - "5433:5432"  # Usa porta 5433 localmente
```

### Resetar o banco de dados
```bash
docker-compose down -v
docker-compose up -d
```

### Ver uso de memória e CPU
```bash
docker stats postgres_sequelize
```

### Backup do banco de dados
```bash
docker exec postgres_sequelize pg_dump -U admin orm_node > backup.sql
```

### Restaurar backup
```bash
docker exec -i postgres_sequelize psql -U admin orm_node < backup.sql
```

## 🔍 Ferramentas GUI Recomendadas

- **DBeaver** - https://dbeaver.io/ (gratuito, multiplataforma)
- **pgAdmin** - https://www.pgadmin.org/ (oficial PostgreSQL)
- **TablePlus** - https://tableplus.com/ (macOS, Linux, Windows)
- **Beekeeper Studio** - https://www.beekeeperstudio.io/ (open source)

## 📝 Variáveis de Ambiente

Para maior segurança, crie um arquivo `.env`:

```env
POSTGRES_USER=admin
POSTGRES_PASSWORD=admin123
POSTGRES_DB=orm_node
POSTGRES_PORT=5432
```

E atualize o `docker-compose.yml`:
```yaml
environment:
  POSTGRES_USER: ${POSTGRES_USER}
  POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
  POSTGRES_DB: ${POSTGRES_DB}
```

**Não esqueça de adicionar `.env` ao `.gitignore`!**
