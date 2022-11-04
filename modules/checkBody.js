const checkBody = (body, eltOfBody) => eltOfBody.every(elt => !!body[elt]);

module.exports = {checkBody};