function incompatibleChannel(channel, markOrFacet, when) {
    // Example logic (replace with your specific implementation)
    if (when === 'before') {
        console.log(`Channel '${channel}' is incompatible with '${markOrFacet}' before certain action.`);
    } else if (when === 'after') {
        console.log(`Channel '${channel}' is incompatible with '${markOrFacet}' after certain action.`);
    } else {
        console.log(`Channel '${channel}' is incompatible with '${markOrFacet}' under unknown conditions.`);
    }
}

// Example usage
incompatibleChannel('x', 'point', 'before');
incompatibleChannel('color', 'facet', 'after');
