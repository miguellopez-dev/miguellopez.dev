export default function Form() {
    return (
        <div className='m-auto'>
            <form action={''} method='post' className=''>
                <div>
                    <label htmlFor='firstName'>First Name</label>
                    <input
                        type='text'
                        id='firstName'
                        name='firstName'
                        required
                    />
                </div>

                <div>
                    <label htmlFor='lastName'>Last Name</label>
                    <input type='text' id='lastName' name='lastName' required />
                </div>

                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' required />
                </div>

                <div>
                    <label htmlFor='message'>Message</label>
                    <textarea id='message' name='message' />
                </div>
            </form>
        </div>
    );
}
