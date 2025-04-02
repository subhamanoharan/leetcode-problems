import { Readable, Transform } from 'stream';
// import { signal } from '/signal';

export function createReadableStream(str) {
    let data = ''
    const readableStream =  Readable.from(str)
    readableStream.on('data', (chunk) => {
        for(let i = 0;i<chunk.length; i++) {
            const c = chunk[i]
            // console.log(data.includes(c) ? 'duplicate' : 'received', c)
            data += c;
        }
    });
    return readableStream;
}
