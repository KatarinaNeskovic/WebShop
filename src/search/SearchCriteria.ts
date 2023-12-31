import { SizeList, ColorList } from "../Products/Product";
import { IProduct } from "../Products/Product";
export interface ISearchCriteria {
  priceRange?: {
    from?: number;
    to?: number;
  };
  sizes: SizeList;
  colors: ColorList;
}


export function ifAnySatsifies(subArray: string[], superArray: string[]) {
  if (subArray.length==0) return true
  return subArray.some((e) => superArray.includes(e)); //nije mi jasno skroz 
}

export function getFilteredProducts(
  criteria: ISearchCriteria,
  products: IProduct[]
) {

  const filterFunction = (p: IProduct) => {
    // check for the lower range
    if (criteria.priceRange?.from && criteria.priceRange.from > p.price)
      return false;
    // check for the upper range
    if (criteria.priceRange?.to && criteria.priceRange.to < p.price)
      return false;
    // check sizes
    if (!ifAnySatsifies(criteria.sizes, p.sizes)) return false;
    // check colors
    if (!ifAnySatsifies(criteria.colors, p.colors)) return false;

    return true; // Add this line
  };

  return products.filter(filterFunction);
}
