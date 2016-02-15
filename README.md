# nodetwitter
Ejemplo de uso de node twitter

## Clonas el Repo, (necesitas el comando git)

    $ git clone https://github.com/rnrneverdies/nodetwitter.git
    Cloning into 'nodetwitter'...
    remote: Counting objects: 6, done.
    remote: Compressing objects: 100% (5/5), done.
    remote: Total 6 (delta 0), reused 6 (delta 0), pack-reused 0
    Unpacking objects: 100% (6/6), done.
    Checking connectivity... done.

## Ingresas al directorio    

    $ cd nodetwitter/

## Instalas los paquetes con npm install

    $ npm install
    npm WARN package.json pruebanode@1.0.0 No description
    npm WARN package.json pruebanode@1.0.0 No repository field.
    npm WARN package.json pruebanode@1.0.0 No README data
    express@4.13.4 node_modules\express
    ├── array-flatten@1.1.1
    ├── escape-html@1.0.3
    ├── content-disposition@0.5.1
    ├── range-parser@1.0.3
    ├── parseurl@1.3.1
    ├── utils-merge@1.0.0
    ├── cookie-signature@1.0.6
    ├── methods@1.1.2
    ├── content-type@1.0.1
    ├── path-to-regexp@0.1.7
    ├── etag@1.7.0
    ├── cookie@0.1.5
    ├── vary@1.0.1
    ├── merge-descriptors@1.0.1
    ├── serve-static@1.10.2
    ├── fresh@0.3.0
    ├── depd@1.1.0
    ├── qs@4.0.0
    ├── finalhandler@0.4.1 (unpipe@1.0.0)
    ├── on-finished@2.3.0 (ee-first@1.1.1)
    ├── debug@2.2.0 (ms@0.7.1)
    ├── proxy-addr@1.0.10 (forwarded@0.1.0, ipaddr.js@1.0.5)
    ├── send@0.13.1 (destroy@1.0.4, statuses@1.2.1, ms@0.7.1, mime@1.3.4, http-errors@1.3.1)
    ├── accepts@1.2.13 (negotiator@0.5.3, mime-types@2.1.9)
    └── type-is@1.6.11 (media-typer@0.3.0, mime-types@2.1.9)
    
    twitter@1.2.5 node_modules\twitter
    ├── deep-extend@0.3.3
    └── request@2.69.0 (aws-sign2@0.6.0, forever-agent@0.6.1, tunnel-agent@0.4.2, is-typedarray@1.0.0, oauth-sign@0.8.1, caseless@0.11.0, stringstream@0.0.5, isstream@0.1.2, json-stringify-safe@5.0.1, extend@3.0.0, tough-cookie@2.2.1, node-uuid@1.4.7, qs@6.0.2, mime-types@2.1.9, combined-stream@1.0.5, aws4@1.2.1, hawk@3.1.3, form-data@1.0.0-rc3, bl@1.0.3, http-signature@1.1.1, har-validator@2.0.6)

## Editas el archivo server.js con los datos de tus claves de applicacion de twitter.

    var twclient = new Twitter({
      consumer_key: '<aqui>', // debes poner los datos correctos en estos campos
      consumer_secret: '<aqui>',
      access_token_key: '<aqui>',
      access_token_secret: '<aqui>'
    });

## Inicias el servicio con npm start

    $ npm start
    
    > pruebanode@1.0.0 start E:\Sandbox\nodetwitter
    > node server.js
    
## Abres con el navegador esta url

    http://localhost:3000/index.html
