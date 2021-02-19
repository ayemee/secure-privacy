export interface Banner {
    BannerId: number,
    Created: string,
    LastUpdated: string,
    accordian: Accordian[]
}

export interface Accordian {
    CategoyHeading: string,
    CategoyId: number,
    CategoyText: string,
    ExtraSettings: string,
    IsMandatory: boolean,
    Localization: string,
    PluginList: Plugins[]
}

export interface Plugins {
    BlockingEnabled: boolean,
    ComplianceType: string,
    ComplianceTypeID: number,
    PluginDomain: string,
    cName: string,
    optOutExternalLink?: string
}
