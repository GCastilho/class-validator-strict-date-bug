import {
	IsDateString,
} from 'class-validator'

export class ValidatorTest {
	@IsDateString({ strict: true })
	isoDate: string
}
