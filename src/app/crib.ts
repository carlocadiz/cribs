import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';

export interface Crib {
    id: number,
    type: string,
    price: number,
    address: string,
    description: string,
    bedrooms: number,
    bathrooms: number,
    area: number,
    image: string
}
