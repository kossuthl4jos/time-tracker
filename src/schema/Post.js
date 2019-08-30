export default function Post({
	id = '',
	description = '',
	name = '',
	hours = '',
	creationDate = ''
} = {}) {
	return { id, description, name, hours, creationDate };
}
