import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'app-carta',
  standalone: true,
  imports: [NgStyle, MenuComponent],
  templateUrl: './carta.component.html',
  styleUrl: './carta.component.css',
})
export class CartaComponent {
  img_background = 'assets/header_carta.jpg';
  img_bebidas = 'assets/icons/bebidas.png';
  img_comidas = 'assets/icons/comidas.png';
  img_desayunos = 'assets/icons/desayunos.png';

  menu_desayunos = [
    {
      header: 'Desayunos y meriendas',
      items: [
        {
          name: 'N°1 - BEBIDA CALIENTE CON DOS MEDIALUNAS',
          description: '',
          price: 3500,
        },
        {
          name: 'N°2 - BEBIDA CALIENTE CON TOSTADAS',
          description:
            'ACOMPAÑADAS DE MANTECA O QUESO CREMA Y DULCE DE LECHE O MERMELADA',
          price: 5700,
        },
        {
          name: 'N°3 - NATURAL',
          description:
            'YOGURT con GRANOLA casera y FRUTOS SECOS Y FRUTA, acompañado con TOSTADAS, QUESO CREMA y MERMELADA',
          price: 4200,
        },
        {
          name: 'N°4 - BEBIDA CALIENTE CON 1/2 TOSTADO',
          description: '',
          price: 4500,
        },
        {
          name: 'N°5 - LA CASA',
          description:
            'BEBIDA CALIENTE, mitad de JAMÓN/QUESO, mix de FRUTOS SECOS y jugo de NARANJA',
          price: 4700,
        },
        {
          name: 'N°6 - TOSTADO AMERICANO',
          description:
            'BEBIDA CALIENTE, TOSTADO AMERICANO y juguito de NARANJA',
          price: 5900,
        },
      ],
    },
    {
      header: 'Desayunos y meriendas',
      items: [
        {
          name: 'N°7 - HUEVOS REVUELTOS',
          description: 'BEBIDA CALIENTE, HUEVOS revueltos y juguito de NARANJA',
          price: 6200,
        },
        {
          name: 'N°8 - MERIENDA PARA DOS',
          description:
            '2 BEBIDAS CALIENTES, un cuadrado DULCE, 2 MEDIALUNAS, mitad TOSTADO y un SCON chico',
          price: 13000,
        },
        {
          name: 'N°9 - TOSTADO PARA DOS',
          description: '2 BEBIDAS CALIENTES más un TOSTADO',
          price: 9000,
        },
        {
          name: 'N°10 - BRUNCH 1',
          description:
            '2 LATTES, 2 EXPRIMIDOS, 1 SCON RELLENO, HUEVOS REVUELTOS, 2 MEDIALUNAS, YOGURT con FRUTA y GRANOLA',
          price: 19000,
        },
        {
          name: 'N°11 - BRUNCH 2',
          description:
            '2 LATTES, 2 LIMONADAS, 2 MEDIALUNAS DE JAMÓN Y QUESO, 1 TORTA BROWNIE, 1 CUADRADO DULCE, 1 TOSTADO AMERICANO (pan de papa, jamón crudo y queso)',
          price: 18000,
        },
      ],
    },
    {
      header: 'Bebidas y Cafetería',
      items: [
        // Cafetería básica
        {
          name: 'RISTRETTO',
          description: '',
          price: 2000,
        },
        {
          name: 'ESPRESSO',
          description: '',
          price: 2000,
        },
        {
          name: 'ESPRESSO CORTADO',
          description: '',
          price: 2300,
        },
        {
          name: 'ESPRESSO DOBLE',
          description: '',
          price: 2800,
        },
        {
          name: 'DOBLE CORTADO',
          description: '',
          price: 3100,
        },
        {
          name: 'CAFFE LATTE',
          description: '',
          price: 2500,
        },
        {
          name: 'CAFFE LATTE TAZÓN',
          description: '',
          price: 3200,
        },
        {
          name: 'LÁGRIMA',
          description: '',
          price: 2300,
        },
        {
          name: 'LAGRIMOTA',
          description: '',
          price: 2500,
        },
        {
          name: 'SUBMARINO',
          description: '',
          price: 2500,
        },
        {
          name: 'CHOCOLATADA',
          description: '',
          price: 2100,
        },

        // Cafés saborizados
        {
          name: 'CAFÉ SABORIZADO',
          description: 'VAINILLA, CARAMELO, AVELLANAS',
          price: 3000,
        },
        {
          name: 'CAFÉ SABORIZADO EN TAZÓN',
          description: 'VAINILLA, CARAMELO, AVELLANAS',
          price: 3800,
        },

        // Cappuccinos
        {
          name: 'CAPPUCCINOS ITALIANO',
          description: 'CHOCOLATE Y CANELA',
          price: 3000,
        },
        {
          name: 'CAPPUCCINOS EN TAZÓN',
          description: '',
          price: 3700,
        },
      ],
    },
    {
      header: 'Cafés esperituosos',
      items: [
        {
          name: 'CAFÉ CALIPSO',
          description: '1 oz. de TÍA MARÍA, café espresso, crema y canela',
          price: 4400,
        },
        {
          name: 'CAFÉ IRLANDÉS',
          description: '1 oz. de WHISKY, café espresso, crema y canela',
          price: 4400,
        },
        {
          name: 'VODKA ESPRESSO',
          description: '1 oz. de VODKA, café espresso, crema y canela',
          price: 4400,
        },
      ],
    },
    {
      header: 'Bebidas Frías',
      items: [
        {
          name: 'FRAPPUCHINO',
          description: '',
          price: 3900,
        },
        {
          name: 'MILKSHAKE',
          description: '',
          price: 3700,
        },
        {
          name: 'SMOOTHIES',
          description: '',
          price: 3700,
        },
      ],
    },
    {
      header: 'Tés',
      items: [
        // Tés
        {
          name: 'TÉ NEGRO de CEYLON',
          description: 'En saquitos',
          price: 2000,
        },
        {
          name: 'BLUE EARL GREY',
          description: '',
          price: 2500,
        },
        {
          name: 'BUENA VIBRA (CHAI)',
          description: '',
          price: 2500,
        },
        {
          name: 'ORANGE GREEN LOVE',
          description: '',
          price: 2500,
        },
        {
          name: 'BE SWEET',
          description: '',
          price: 2500,
        },
      ],
    },

    {
      header: 'Cosas Ricas',
      items: [
        {
          name: 'MEDALUNAS',
          description: '',
          price: 700,
        },
        {
          name: 'COOKIES',
          description: '',
          price: 1200,
        },
        {
          name: 'FROLA de MEMBRILLO',
          description: '',
          price: 2400,
        },
        {
          name: 'CHOCOTORTA',
          description: '',
          price: 3200,
        },
        {
          name: 'CUADRADO de RICOTA',
          description: '',
          price: 2800,
        },
        {
          name: 'BROWNIE con NUEZ',
          description: '',
          price: 2800,
        },
        {
          name: 'APPLE CRUMBLE',
          description: '',
          price: 4100,
        },
        {
          name: 'SCON DE LIMÓN',
          description: '',
          price: 2200,
        },
        {
          name: 'ALFAJOR de NUEZ',
          description: '',
          price: 2200,
        },
        {
          name: 'ALFAJOR de CHOCOLATE',
          description: '',
          price: 2200,
        },
        {
          name: 'ALFAJOR de FRUTOS ROJOS',
          description: '',
          price: 2200,
        },
      ],
    },

    {
      header: 'Cosas Ricas',
      items: [
        {
          name: 'CHOCOTORTA',
          description: '',
          price: 2900,
        },
        {
          name: 'TIRAMISÚ',
          description: '',
          price: 3700,
        },
        {
          name: 'CHEESECAKE',
          description: '',
          price: 3900,
        },
        {
          name: 'LEMON PIE',
          description: '',
          price: 3900,
        },
        {
          name: 'TORTA BROWNIE',
          description: '',
          price: 3700,
        },
        {
          name: 'PANES de QUESO',
          description: '',
          price: 3200,
        },
        {
          name: 'SCON de QUESO',
          description: '',
          price: 3300,
        },
        {
          name: 'SCON RELLENO',
          description: '',
          price: 4400,
        },
        {
          name: 'MEDIALUNAS con JAMÓN y QUESO',
          description: '',
          price: 3400,
        },
        {
          name: 'TOSTADO MEXICANO',
          description: '',
          price: 2800,
        },
        {
          name: 'HUEVOS REVUELTOS',
          description: '',
          price: 3900,
        },
        {
          name: 'TOSTADO',
          description: '',
          price: 4800,
        },
      ],
    },
  ];

  menu_bebidas = [
    {
      header: 'Gaseosas',
      items: [
        {
          name: 'Gaseosa',
          description: '',
          price: 2500,
        },
        {
          name: 'Agua Saborizada',
          description: '',
          price: 2000,
        },
        {
          name: 'Agua con y sin gas',
          description: '',
          price: 2000,
        },
      ],
    },
    {
      header: 'Cerveza',
      items: [
        {
          name: 'Andes',
          description: '500cc',
          price: 3900,
        },
        {
          name: 'Budweiser',
          description: '',
          price: 5400,
        },
        {
          name: 'Patagonia',
          description: '',
          price: 6400,
        },
      ],
    },
    {
      header: 'Exprimidos',
      items: [
        {
          name: 'Juguito',
          description: '',
          price: 1100,
        },
        {
          name: 'Naranja',
          description: '',
          price: 2200,
        },
      ],
    },
    {
      header: 'Limonadas',
      items: [
        {
          name: 'Limonada',
          description: 'Jugo de fruta, menta y jengibre',
          price: 2200,
        },
        {
          name: 'Naranjada',
          description: '',
          price: 2400,
        },
      ],
    },
    {
      header: 'Licuados',
      items: [
        {
          name: 'Banana con leche',
          description: '',
          price: 2500,
        },
        {
          name: 'Banana - Naranja con leche',
          description: '',
          price: 2500,
        },
        {
          name: 'Naranja - Manzana',
          description: '',
          price: 2500,
        },
        {
          name: 'Kiwi - Naranja ',
          description: '',
          price: 2500,
        },
      ],
    },
  ];

  menu_comidas = [
    {
      header: 'Ensadalas',
      items: [
        {
          name: 'César',
          description:
            'Mix de lechugas, pollo, croutons, queso parmesano y salsa César',
          price: 5400,
        },
        {
          name: 'Chef',
          description:
            'Mix de lechugas, queso en cubos, jamón natural, huevo y tomates',
          price: 4900,
        },
        {
          name: 'Mediterránea',
          description:
            'Mix de lechugas, aceitunas negras, rúcula, tomates, queso parmesano y jamón crudo',
          price: 6000,
        },
        {
          name: 'Atún',
          description:
            'Mix de lechugas, arvejas, tomates, atún y zanahoria rallada',
          price: 4600,
        },
        {
          name: 'Pollo',
          description:
            'Mix de lechugas, choclo, apio, pollo y zanahoria rallada',
          price: 4600,
        },
      ],
    },
    {
      header: 'Pizza Individual',
      items: [
        {
          name: 'MOZZARELLA',
          description: '',
          price: 3600,
        },
        {
          name: 'MOZZARELLA CON JAMÓN',
          description: '',
          price: 4000,
        },
        {
          name: 'MOZZARELLA Y ROQUEFORT',
          description: '',
          price: 4200,
        },
        {
          name: 'NAPOLITANA',
          description: '',
          price: 3900,
        },
        {
          name: 'RÚCULA Y JAMÓN CRUDO',
          description: '',
          price: 5100,
        },
      ],
    },
    {
      header: 'Tostados',
      items: [
        {
          name: 'Pan de miga con jamon y queso',
          description: '',
          price: 4600,
        },
      ],
    },
    {
      header: 'Sandwichs',
      items: [
        {
          name: 'Jamón y queso',
          description: '',
          price: 4200,
        },
        {
          name: 'Jamón crudo y queso',
          description: '',
          price: 4900,
        },
      ],
    },
    {
      header: 'Tartas',
      items: [
        {
          name: 'Tarta',
          description: 'Preguntar por variedad del día',
          price: 7000,
        },
      ],
    },
    {
      header: 'Empanadas',
      items: [
        {
          name: 'CARNE',
          description: '',
          price: 1800,
        },
        {
          name: 'POLLO',
          description: '',
          price: 1800,
        },
        {
          name: 'JAMÓN Y QUESO',
          description: '',
          price: 1800,
        },
        {
          name: 'CHOCLO Y QUESO',
          description: '',
          price: 1500,
        },
      ],
    },
    {
      header: 'Churrasquitos',
      items: [
        {
          name: 'Churrasquito',
          description: 'Lechuga, tomate, cebolla y mayonesa',
          price: 6500,
        },
        {
          name: 'Churrasquito',
          description: 'Panceta, queso tybo y cebollas caramelizadas',
          price: 7000,
        },
        {
          name: 'Churrasquito',
          description: 'Con jamon y queso',
          price: 6900,
        },
      ],
    },

    {
      header: 'Sandwichs especiales',
      items: [
        // Especiales
        {
          name: 'ESP. 1',
          description: 'JAMÓN COCIDO, QUESO, HUEVO, TOMATE, LECHUGA y MAYONESA',
          price: 4600,
        },
        {
          name: 'ESP. 2',
          description:
            'JAMÓN CRUDO, TOMATES SECOS y RÚCULA con aceite de OLIVA',
          price: 4600,
        },
        {
          name: 'ESP. 3',
          description: 'POLLO horneado, TOMATE, LECHUGA, MOSTAZA y MAYONESA',
          price: 4600,
        },
        {
          name: 'ESP. 4',
          description:
            'POLLO horneado, TOMATES SECOS y RÚCULA con aceite de OLIVA',
          price: 4600,
        },
        {
          name: 'ESP. 5',
          description: 'QUESO AZUL, JAMÓN CRUDO y MANTECA',
          price: 4600,
        },
        {
          name: 'ESP. 6',
          description: 'JAMÓN COCIDO y MOZZARELLA (tostado)',
          price: 4600,
        },
        {
          name: 'ESP. 7',
          description:
            'MOZZARELLA, TOMATE, ACEITUNAS negras, ORÉGANO y aceite de OLIVA',
          price: 4600,
        },
        {
          name: 'ESP. 8',
          description: 'QUESO TYBO, RÚCULA, TOMATE y salsa CÍTRICA',
          price: 4600,
        },
        {
          name: 'ESP. 9',
          description:
            'JAMÓN CRUDO, queso PATEGRÁS, TOMATE y RÚCULA con aceite de OLIVA',
          price: 4600,
        },
      ],
    },

    {
      header: 'S. especiales horneados',
      items: [
        // Especiales Horneados
        {
          name: 'ESP. 10',
          description:
            'JAMÓN COCIDO, MOZZARELLA, HUEVO, CREMA y CEBOLLA de VERDEO',
          price: 5000,
        },
        {
          name: 'ESP. 10',
          description: 'POLLO, MOZZARELLA, HUEVO, CREMA y CEBOLLA de VERDEO',
          price: 5000,
        },
        {
          name: 'ESP. 10',
          description: 'ATÚN, MOZZARELLA, HUEVO, CREMA y CEBOLLA de VERDEO',
          price: 5000,
        },
        {
          name: 'ESP. 11',
          description: 'POLLO, queso PARMESANO, RÚCULA y QUESO CREMA',
          price: 5000,
        },
        {
          name: 'ESP. 12',
          description: 'JAMÓN CRUDO, PARMESANO, TOMATE, RÚCULA y QUESO CREMA',
          price: 5000,
        },
        {
          name: 'ESP. 13',
          description: 'POLLO, MOZZARELLA y ACEITUNAS negras',
          price: 5000,
        },
        {
          name: 'ESP. 14',
          description: 'POLLO, MOZZARELLA, ACEITUNAS negras y QUESO AZUL',
          price: 5000,
        },
      ],
    },

    {
      header: 'S. especiales especiales',
      items: [
        // Especiales Especiales
        {
          name: 'ESP. 15',
          description:
            'CARNE HORNEADA DESMENUDA CON SALSA CÍTRICA, LECHUGA, TOMATE y CEBOLLA',
          price: 6500,
        },
        {
          name: 'ESP. 16',
          description:
            'BONDIOLA HORNEADA CON CERVEZA DESMENUDA CON BBQ Y QUESO CHEDDAR',
          price: 7300,
        },
        {
          name: 'ESP. 17',
          description:
            'VEGETALES SALTEADOS: BERENJENA, ZUCCHINI, CEBOLLA, ZANAHORIA, MORRÓN, PUERRO, SALSA DE SOJA y MOZZARELLA',
          price: 4800,
        },
      ],
    },
  ];
}
