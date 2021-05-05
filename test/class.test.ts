import assert from 'assert'
import { validateOrReject } from 'class-validator'
import { ValidatorTest } from '../src/class'

it('Should fail ISO Date Strict Validation', async () => {
	const instance = new ValidatorTest()
	instance.isoDate = '2009-02-29'

	await assert.rejects(() => validateOrReject(instance), 'Class successfully validated')
})
