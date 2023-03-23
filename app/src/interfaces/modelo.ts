import Comparavel from "./comparavel.js";
import Impressora from "./impressora.js";

export default interface Modelo<T> extends Impressora, Comparavel<T> {
}