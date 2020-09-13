const compose = (...funcs) => (View) => {
    return funcs.reduceRight((prevResult, func) => func(prevResult), View);
};

export default compose;