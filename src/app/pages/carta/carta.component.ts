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
          name: 'N°1 - Bebida caliente con dos medialunas',
          description: '',
          price: 3500,
        },
        {
          name: 'N°2 - Bebida caliente con tostadas',
          description:
            'Acompañadas de manteca o queso crema y dulce de leche o mermelada',
          price: 5700,
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
