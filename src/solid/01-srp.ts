(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    
    class ProductService {

        getProduct( id: number ) {
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
            console.log('Guardando en base de datos', product );
        }

    }

    class Mailer {

        sendEmails( emailList: string[]) {
            console.log('Enviando correo a los clientes', emailList);
        }

    }

    class ProductBloc {
    
        private productService: ProductService;
        private mailer: Mailer;

        constructor (productorService: ProductService, mailer: Mailer) {
            this.productService = productorService;
            this.mailer = mailer;
        }

        loadProduct( id: number ) {
            this.productService.getProduct( id );
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct( product );
        }
    
        notifyClients() {
            this.mailer.sendEmails(['correo@example.com']);
        }
    
    }
    
    class CartBloc {

        addToCart( productId: number ) {
            console.log('Agregando al carrito ', productId );
        }

    }

    const productService = new ProductService;
    const mailer = new Mailer;

    const productBloc = new ProductBloc( productService, mailer );
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.addToCart(10);
    
})();