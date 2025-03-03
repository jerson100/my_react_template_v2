import { Box } from '@chakra-ui/react';

interface Props {
  fill?: `#${string}`;
}

export function LogoNttdata({ fill }: Props) {
  return (
    <>
      <Box
        as="svg"
        height="28px"
        width="160px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="5 5 500 72.88000000000001">
        <g fill={fill || '#fff'}>
          <path d="M80.82 5.76V20.8h22.875v56.283h16.197V20.799h22.874V5.76zM347.452 5.76h-40.795v15.162h39.69c5.849 0 8.114 2.667 8.114 9.462v2.541h-32.919c-12.527 0-18.743 6.247-18.743 20.398v3.372c0 14.542 6.46 20.388 19.45 20.388h48.258V30.206c0-17.945-5.94-24.446-23.055-24.446m-23.518 56.076c-2.453 0-5.206-1.222-5.206-7.352 0-6.125 2.689-7.196 5.206-7.196h30.527v14.549zM481.943 5.76h-40.786v15.162h39.714c5.816 0 8.082 2.667 8.082 9.462v2.541h-32.885c-12.528 0-18.769 6.247-18.769 20.398v3.372c0 14.542 6.461 20.388 19.442 20.388H505V30.206c0-17.945-5.941-24.446-23.056-24.446m-23.518 56.076c-2.452 0-5.202-1.222-5.202-7.352 0-6.125 2.694-7.196 5.202-7.196h30.528v14.549zM147.91 5.76V20.8h22.875v56.283h16.236V20.799h22.875V5.76zM373.753 5.76V20.8h22.874v56.283h16.196V20.799h22.875V5.76zM296.528 52.1V30.754c0-18.652-7.227-24.96-23.58-24.96h-43.391v71.288h44.151c17.332 0 22.82-8.63 22.82-24.981m-16.54.337c0 6.795-2.296 9.462-8.114 9.462h-26.09V20.955h26.09c5.818 0 8.115 2.664 8.115 9.523zM57.946 60.086c-.337-.643-21.956-42.81-24.623-46.972C30.266 8.34 26.558 5 19.456 5 12.84 5 5 7.908 5 23.799v53.316h15.955V32.648c0-3.181-.181-7.93-.215-8.88-.03-.793 0-1.528.401-1.742.423-.282.885.15 1.222.731.306.619 20.361 40.3 24.648 47.003 3.034 4.813 6.773 8.12 13.874 8.12 6.618 0 14.426-2.94 14.426-18.805V5.76H59.357v44.467c0 3.212.18 7.93.242 8.88 0 .769 0 1.528-.398 1.748-.463.276-.919-.156-1.256-.768" />
        </g>
      </Box>
    </>
  );
}

export default LogoNttdata;
