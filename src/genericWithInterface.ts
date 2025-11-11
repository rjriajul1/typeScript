//* generic with inteface 

interface Developer<T,X = null> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releasedYear: string;
    };
    smartWatch : T,
    bike?: X
}

interface BrandCharaWatch {
    heartRate: string;
    stopWatch: boolean;
}

interface AppleWatch
 {
    heartRate: string;
    callSupport: boolean;
    calculat: boolean;
    aiFeature: boolean;
}

const poorDeveloper: Developer<BrandCharaWatch, {brand:'Yamaha', engineCapacity:'200cc'}> = {
    name: 'Mr. Poor',
    salary: 20,
    device:{
        brand: 'Lenovo',
        model: 'A21',
        releasedYear: '2010'
    },
    smartWatch: {
        heartRate: '200',
        stopWatch: true
    }
}

const richDeveloper: Developer<AppleWatch> = {
    name: 'Mr. Rich',
    salary: 200,
    device:{
        brand: 'Hp',
        model: 'A251',
        releasedYear: '2025'
    },
    smartWatch: {
        heartRate: '200',
        callSupport: true,
        calculat: true,
        aiFeature: true
    },
    bike: null

}