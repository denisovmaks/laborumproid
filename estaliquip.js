function parseFacet(spec, scope, input) {
    // Logic to parse the facet
    console.log("Parsing facet:", spec, scope, input);
    return "Facet Parsed";
}

function someOtherFunction(spec, scope, input) {
    // Logic for other processing
    console.log("Processing without facet:", spec, scope, input);
    return "Processed Without Facet";
}

function processSpec(spec, scope, input, facet) {
    return facet ? parseFacet(spec, scope, input) : someOtherFunction(spec, scope, input);
}

// Example usage:
const spec = { /* some specification */ };
const scope = { /* some scope */ };
const input = { /* some input */ };

// Case with facet
console.log(processSpec(spec, scope, input, true));  // Output: Parsing facet: ...

// Case without facet
console.log(processSpec(spec, scope, input, false));  // Output: Processing without facet: ...
