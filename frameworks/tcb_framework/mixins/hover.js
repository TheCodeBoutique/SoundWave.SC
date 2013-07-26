TCB.Hover = {
    
    initMixin: function() {
        this.adjust('opacity', .65);
    },
    
    mouseEntered: function() {
        this.adjust('opacity', 1);
    },
    
    mouseExited: function() {
        this.adjust('opacity', .65);
    }
    
}