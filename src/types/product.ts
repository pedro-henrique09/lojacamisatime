import produtos from "../data/produtos.json";

export type Product = (typeof produtos)[number];
