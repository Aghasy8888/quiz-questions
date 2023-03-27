export default function randomBetween(n, b = 0) {
    return Math.floor(Math.random() * (b-n) + n);
}