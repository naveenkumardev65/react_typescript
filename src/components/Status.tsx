type StatusProps = {
    status : 'loading' | 'success' | 'error' | false | undefined
}

export default function Status(props: StatusProps) {
    let message;
    if(props?.status === 'loading') {
        message = 'Loading...';
    } else if(props?.status === 'success') {
        message = 'Data fetched successfully';
    } else if(props?.status === 'error') {
        message = 'Fetching data error';
    } else {
        message = 'app running'
    }
  return <div>Status - {message}</div>;
}
