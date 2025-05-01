import ContactsForm from "./ContactsForm";

export default function ContactsPage() {
	return (
		<section className="mt-20 lg:mt-20">
			<div className="">
				<h2 className="font-semibold text-center text-2xl lg:text-4xl">
					Contact me
				</h2>
			</div>
			<ContactsForm />
		</section>
	);
}
