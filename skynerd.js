/***
 * SkyNerd Node
 **/
var
  http = require('http'),
  path = require('path'),
  _ = require('underscore'),
  express = require('express'),
  namespace = require('express-namespace'),
  pub_controllers = require(path.join(__dirname, 'controllers', 'public')),
  server = {},

app = express();

/**
 * Variavel global contendo meta-data acessivel em todos scripts da aplicacao
 * */
GLOBAL.API = require(path.join(__dirname, 'settings.json'));

/**
 * Express settings
 * */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.errorHandler());

/**
 * Variáveis visiveis em todas views
 * */
app.locals({
  site_name : API.SITE_NAME
});

/**
 * Adm Namespace
 * */
app.namespace('/adm', function () {
  app.get('', function (req, res, next) {});
  
  app.get('/post-em-destaque', function (req, res, next) {});
  app.post('/post-em-destaque/promover', function (req, res, next) {});
  
  app.get('/usuarios', function (req, res, next) {});
  app.post('/usuarios/ban', function (req, res, next) {});
  app.post('/usuarios/unban', function (req, res, next) {});
  
  app.get('/moderar-comentarios', function (req, res, next) {});
  app.post('/apagar-comentarios', function (req, res, next) {});
  app.post('/apagar-resposta', function (req, res, next) {});
});

/**
 * Index Controller
 * */
app.get('/', new pub_controllers.MainController().Index);

/**
 * Cadatro Namespace
 * */
app.namespace('/cadastre-se', function () {
  app.get('', function (req, res, next) {});
  app.post('/processar', function (req, res, next) {});
});

/**
 * Login Namespace
 * */
app.namespace('/login', function () {
  app.get('', function (req, res, next) {});
  app.post('/processar', function (req, res, next) {});
  app.post('/logout', function (req, res, next) {});
});

/**
 * Ajuda Controller
 * */
app.get('/ajuda', function (req, res, next) {});

/**
 * Alterar Usuario Namespace
 * */
app.namespace('/alterar-usuario', function () {
  app.get('', function (req, res, next) {});
  app.post('/finalizar', function (req, res, next) {});
});

/**
 * Recuperar Senha Namespace
 * */
app.namespace('/esqueci-minha-senha', function () {
  app.get('', function (req, res, next) {});
  app.post('/concluir', function (req, res, next) {});
});

/**
 * Post Controllers
 * */
app.get('/site/post/:id', function (req, res, next) {});
app.post('/avaliar-postagem', function (req, res, next) {});
app.get('/dados-do-post', function (req, res, next) {});

/**
 * Mini ficha Namespace
 * */
app.namespace('/mini-ficha', function () {
  app.get('', function (req, res, next) {});
  app.get('/login', function (req, res, next) {});
});

/**
 * Mensagens Controllers
 * */
app.post('/enviar-mensagem', function (req, res, next) {});
app.post('/apagar-mensagem', function (req, res, next) {});
app.post('/mensagens/marcar-como-lida', function (req, res, next) {});

/**
 * Comentar Controllers
 * */
app.post('/comentar-post', function (req, res, next) {});
app.get('/comentarios-do-post', function (req, res, next) {});

/**
 * Perfil Namespace
 * */
app.namespace('/perfil', function () {
  app.get('/timeline/post-antigos', function (req, res, next) {});
  app.get('/timeline', function (req, res, next) {});
  
  app.get('/notificadores', function (req, res, next) {});
  app.get('/notificadores/ler', function (req, res, next) {});
  
  app.get('/procurar-aliados', function (req, res, next) {});
  
  app.post('/avaliar', function (req, res, next) {});
  app.get('/avaliacoes', function (req, res, next) {});
  app.post('/favoritar', function (req, res, next) {});
  app.post('/reblogar', function (req, res, next) {});
  app.post('/desblogar', function (req, res, next) {});
  
  app.get('/posts-antigos', function (req, res, next) {});
  
  app.post('/compatilhar', function (req, res, next) {});
  app.get('/posts-em-destaque', function (req, res, next) {});
  
  app.namespace('/compartilhar', function () {
    app.post('/anexar-arquivos', function (req, res, next) {});
    app.post('/analisar-url', function (req, res, next) {});
  });
  
  app.post('/apagar-post', function (req, res, next) {});
  app.post('/apagar-comentario', function (req, res, next) {});
  
  app.post('/adicionar-aliado', function (req, res, next) {});
  app.post('/remover-aliado', function (req, res, next) {});
  app.post('/aprovar-pedido-de-amizade', function (req, res, next) {});
  app.post('/reprovar-pedido-de-amizade', function (req, res, next) {});
  app.post('/bloquear-pedido-de-amizade', function (req, res, next) {});
  
  app.namespace('/configuracoes', function () {
    app.get('', function (req, res, next) {});
    
    app.post('/salvar', function (req, res, next) {});
    app.post('/acesso/salvar', function (req, res, next) {});
    app.post('/privacidade/salvar', function (req, res, next) {});
    app.post('/listas/salvar', function (req, res, next) {});
    app.post('/opcoes/salvar', function (req, res, next) {});
    
    app.post('/trocar-avatar', function (req, res, next) {});
    app.post('/concluir-troca-de-avatar', function (req, res, next) {});
    
    app.post('/gamer-tags/salvar', function (req, res, next) {});
    app.post('/notificacoes/salvar', function (req, res, next) {});
    
    app.get('/cancelar-conta', function (req, res, next) {});
    app.post('/cancelar-conta/confirmar', function (req, res, next) {});
    app.post('/cancelar-conta/segundo-passo', function (req, res, next) {});
    
    app.get('/reativar-conta', function (req, res, next) {});
    app.post('/reativar-conta/confirmar', function (req, res, next) {});
    app.get('/tempo-limite-excedido', function (req, res, next) {});
    
    app.namespace('/:username', function () {
      app.get('', function (req, res, next) {});
      app.get('/badges', function (req, res, next) {});
      app.get('/aliados', function (req, res, next) {});
      app.get('/aliados/pagina', function (req, res, next) {});
      
      app.get('/post/:id', function (req, res, next) {});
    });
  });
});

/**
 * Meu perfil Namespace
 * */
app.namespace('/meu-perfil', function () {
  app.namespace('/redes-sociais', function () {
    app.post('/salvar-configuracoes', function (req, res, next) {});
    //Repita para todas redes sociais
    app.namespace('/youtube', function () {
      app.post('/login', function (req, res, next) {});
      app.post('/logout', function (req, res, next) {});
      app.post('/callback/:variables', function (req, res, next) {});
    });
  });
  
  app.get('', function (req, res, next) {});
  app.get('/aliados', function (req, res, next) {});
  app.get('/badges', function (req, res, next) {});
});

app.namespace('/nerdtrack', function () {
  app.get('/get', function (req, res, next) {});
  app.post('/post', function (req, res, next) {});
  app.post('/rate', function (req, res, next) {});
});

/**
 * User Main Controller
 * */
app.get('/:username', function (req, res, next) {});

server = http.createServer(app);

server.listen(API.HTTP_PORT, API.HTTP_HOST, function () {
  console.log("Iniciando SkyNerd em " + API.HTTP_HOST + ":" + API.HTTP_PORT);
});