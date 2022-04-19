Component({
    properties: {
        dataList: {
            type: Array,
            value: [],
            observer() {
                this.setData({
                    dataListL: this.data.dataList.slice(
                        this.data.dataList.length / 2),
                    dataListR: this.data.dataList.slice(
                        0, this.data.dataList.length / 2)
                })
            }
        },
    },
    data: {
        basePath: getApp().globalData.basePath,
        dataListL: [],
        dataListR: []
    },
    methods: {}
});
