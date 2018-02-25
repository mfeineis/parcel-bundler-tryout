
interface Blubb {
    (): void;
}

const x: Blubb = () => {
    return "bla";
};

console.log(x());
