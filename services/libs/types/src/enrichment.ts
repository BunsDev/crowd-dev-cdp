import { MemberEnrichmentSource } from './enums'
import { IMemberIdentity, IMemberReach } from './members'
import { IOrganizationIdentity } from './organizations'

export interface IMemberEnrichmentCache<T> {
  createdAt: string
  updatedAt: string
  memberId: string
  data: T
  source: MemberEnrichmentSource
}

export interface IMemberEnrichmentSourceQueryInput {
  source: MemberEnrichmentSource
  cacheObsoleteAfterSeconds: number
  enrichableBySql: string
}

export interface IEnrichableMember {
  id: string
  displayName: string
  location: string
  website: string
  identities: IMemberIdentity[]
  activityCount: number
}

export interface IEnrichableMemberIdentityActivityAggregate {
  activityCount: number
  username: string
  platform: string
}

export interface IMemberOrganizationData {
  id: string
  orgId: string
  orgName: string
  jobTitle: string
  dateStart: string
  dateEnd: string
  source: string
  identities?: IOrganizationIdentity[]
}

export interface IMemberOriginalData {
  // members table data
  displayName: string
  attributes: Record<string, Record<string, unknown>>
  manuallyChangedFields: string[]
  reach: IMemberReach

  // memberIdentities table data
  identities: IMemberIdentity[]

  // memberOrganizations table data
  organizations: IMemberOrganizationData[]
}
