
export class NodeService2 {

    getTreeTableNodes2() {
        return fetch('data/treetablenodes.json').then(res => res.json())
                .then(d => d.root);
    }

    getTreeNodes2() {
        return fetch('data/treenodes2.json').then(res => res.json())
                .then(d => d.root);
    }
}
    