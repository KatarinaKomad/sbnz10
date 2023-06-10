export enum ReportType{
    BOLEST,
    TIP_BILJKE,
    JAKI_PREPARATI,
    SLABI_PREPARATI,
    PREPARAT
}

export interface ReportData{
    startDate: Date;
    endDate : Date;
    isDoctor: boolean;
    reportType: ReportType
    nazivBolesti? : string;
    tipBiljke? : string;
    nazivPreparata? : string;
}

export type ReportDataType = { type: string; name: string; showInLegend: string; color: string; dataPoints: { y: number; label: string; }[]; }[]